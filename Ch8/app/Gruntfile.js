module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-shell');
    grunt.initConfig({
        /**
         * We read in our `package.json` file so we can access the package name and
         * version.
         */
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            git_add: {
                command: [
                    'git add .',
                    'git add -u',
                    "git commit -m '<%= pkg.version %> -> <%= pkg.commit %>'",
                    'git push'
                ].join('&&')
            },
            lint: {
                command: 'yarn run lint'
            },
            format: {
                command: 'yarn run format'
            },
            yarn_build: {
                command: 'yarn build'
            },
            yarn_serve: {
                command: 'serve -s build'
            },
            open_build: {
                command: 'open http://localhost:5000'
            },
            delete_old_files_api: {
                command: 'rm -rf /YOUR-API-LOCATION/app-api/dist'
            },
            copy_new_files_api: {
                command: 'cp -rf /YOUR-APP-LOCATION/app/build/ /YOUR-API-LOCATION/app-api/dist/'
            },
            server_upload_app: {
                command: 'scp -r -i /YOUR-PEM-LOCATION/key.pem' +
                    ' /YOUR-API-LOCATION/app-api/dist/* ubuntu@YOUR-UBUNTU-PUBLIC-IP:/home/ubuntu/www/dist'
            },
            stop_node: {
                command: "ssh -i /YOUR-PEM-LOCATION/key.pem ubuntu@YOUR-UBUNTU-PUBLIC-IP 'sudo pkill -f node'"
            },
            start_node: {
                command: "ssh -i /YOUR-PEM-LOCATION/key.pem ubuntu@YOUR-UBUNTU-PUBLIC-IP 'sudo forever start /home/ubuntu/www/server.js'"
            },
        }
    });
    grunt.registerTask('default', ['shell:git_add', 'shell:format', 'shell:yarn_build', 'shell:delete_old_files_api', 'shell:copy_new_files_api', 'shell:server_upload_app', 'shell:stop_node', 'shell:start_node']);
    grunt.registerTask('local-prod-build', ['shell:git_add', 'shell:format', 'shell:yarn_build', 'shell:yarn_serve', 'shell:open_build']);
};