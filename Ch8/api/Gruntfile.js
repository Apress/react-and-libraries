module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-open');
    grunt.initConfig({
        /**
         * We read in our `package.json` file so we can access the package name and
         * version.
         */
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            multiple: {
                command: [
                    'git add .',
                    'git add -u',
                    "git commit -m '<%= pkg.version %> -> <%= pkg.commit %>'",
                    'git push'
                ].join('&&')
            },
            upload_server_file: {
                command: 'scp -r -i /YOUR-APP-LOCATION/app/docs/keys/ee-amazon-key.pem /YOUR-API-LOCATION/api/server.js ubuntu@YOUR-UBUNTU-PUBLIC-IP:/home/ubuntu/www/'
            },
            server_upload_services: {
                command: 'scp -r -i /YOUR-APP-LOCATION/app/docs/keys/ee-amazon-key.pem /YOUR-API-LOCATION/api/services/* ubuntu@YOUR-UBUNTU-PUBLIC-IP:/home/ubuntu/www/services'
            },
            server_upload_services_post: {
                command: 'scp -r -i /YOUR-APP-LOCATION/app/docs/keys/ee-amazon-key.pem /YOUR-API-LOCATION/api/services_post/* ubuntu@YOUR-UBUNTU-PUBLIC-IP:/home/ubuntu/www/services_post'
            },
            server_package: {
                command: 'scp -i /YOUR-APP-LOCATION/app/docs/keys/ee-amazon-key.pem /YOUR-API-LOCATION/api/package.json ubuntu@YOUR-UBUNTU-PUBLIC-IP:/home/ubuntu/www/package.json'
            },
            server_upload_utils: {
                command: 'scp -r -i /YOUR-APP-LOCATION/app/docs/keys/ee-amazon-key.pem /YOUR-API-LOCATION/api/utils/* ubuntu@YOUR-UBUNTU-PUBLIC-IP:/home/ubuntu/www/utils'
            },
            server_upload_app: {
                command: 'scp -r -i /YOUR-APP-LOCATION/app/docs/keys/ee-amazon-key.pem /YOUR-API-LOCATION/api/dist/* ubuntu@YOUR-UBUNTU-PUBLIC-IP:/home/ubuntu/www/dist'
            },
            stop_node: {
                command: "ssh -i /YOUR-APP-LOCATION/app/docs/keys/ee-amazon-key.pem ubuntu@YOUR-UBUNTU-PUBLIC-IP 'sudo pkill -f node'"
            },
            start_node: {
                command: "ssh -i /YOUR-APP-LOCATION/app/docs/keys/ee-amazon-key.pem ubuntu@YOUR-UBUNTU-PUBLIC-IP 'sudo forever start /home/ubuntu/www/server.js'"
            }
        }
    });
    grunt.registerTask('default', ['shell:multiple', 'shell:server_package', 'shell:stop_node', 'shell:upload_server_file', 'shell:server_upload_services', 'shell:server_upload_services_post', 'shell:server_upload_utils', 'shell:start_node']);
    grunt.registerTask('upload-app', ['shell:server_upload_app']);
    grunt.registerTask('node-restart', ['shell:stop_node','shell:start_node']);
};