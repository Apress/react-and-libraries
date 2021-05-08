# Errata for *React and Libraries*

Exercises for github links are incorrect;

https://github.com/Apress/react-and-libraries/exercise-x-x
should be;
https://github.com/Apress/react-and-libraries/tree/main/Ch4/exercise-x-x

Here's an example;
https://github.com/Apress/react-and-libraries/exercise-4-2

should be;
https://github.com/Apress/react-and-libraries/tree/main/Ch4/exercise-4-2


On **page 61** [code error]:
 
The code snippet at the bottom of Page 61 should read as follows:

export default function ScrollToTop() {
  const { pathname } = useLocation()
   useEffect(
    () => {
      try {
        window.scrollTo(0, 0)
    },
    [pathname]
  )
  return null
}

On **page 259** [code error]:

$ sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j
EDIRECT --to-port 8081 

Shoud be 'REDIRECT'; 

$ sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j
REDIRECT --to-port 8081 

On **page 306** [text error]:

'Did you know, according to a QualiTest survey, that almost 90 percent of people said
they would abandon an app if they encountered bugs or glitches maintain tests on a
daily basis?'

maintain tests should be removed;

Did you know, according to a QualiTest survey, that almost 90 percent of people said
they would abandon an app if they encountered bugs or glitches on a
daily basis?

On **page 309** [text error]:

'Jest, Puppeteer, Jest,'

Jest is mentioned twice and one should be removed;

'Jest, Puppeteer'

On **page 308** [code error]:

"test:e2e": "jest -c e2e/jest.config.js --watch"

Should be;

"test:e2e": "jest -c e2e/jest.config.js"

On **page 320** [code error]:

"I will my ultimate React quality development"

Should be;

I will show you an example of a complete React quality development

On **page 322** [text error]:

'As we save seen'

Should be;
'As we have seen'


On **page 24** [text error]:

'The folder structure is **park** of...'

should be

'The folder structure is **part** of...'

On **page 24** []:

q: Why wrote **The list was React libraries.** if it was a general libraries not specifically for React

q: What is **We could add this sentence to explain the readers** for ? 

***

On **page xx** [Summary of error]:
 
Details of error here. Highlight key pieces in **bold**.

***
