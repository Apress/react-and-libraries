# Errata for *React and Libraries*

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

***

On **page xx** [Summary of error]:
 
Details of error here. Highlight key pieces in **bold**.

***
