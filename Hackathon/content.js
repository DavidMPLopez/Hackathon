// function spaghetti(){
    // let a = document.querySelectorAll('a').first()
        //   a.forEach(e => e.href="https://www.youtube.com/watch?v=oHg5SJYRHA0")
        //   console.log('###hi', a)
        //   document.body.style.backgroundColor = "green"
        
        const printRec = (tag) => {
            const cache = {}
            let count = 0
            console.log("###count", count)
            return () => {
                count++
                console.log("###count in func", count)
                if (!cache[tag.innerText]){
                    console.log("###count in if", count)
                    tag.click()
                    cache[tag.innerText] = tag
                }
                return
            }
        }

        const headings = document.evaluate("//a[contains(., 'Print')]", document, null, XPathResult.ANY_TYPE, null );
        let thisHeading = null;
        const tagNames = [];
        while(thisHeading = headings.iterateNext()) {
            tagNames.push(thisHeading);
            console.log(thisHeading.innerText)
          }
          console.log('##tagnames', tagNames.length-1)

        //   const result = printRec(tagNames[tagNames.length-1])

        if (tagNames.length === 1){ 
            printRec(tagNames[1])()
           // console.log("tagnames",tagNames[0])
        //    result()
        }else if(tagNames.length > 1) {
            printRec(tagNames[1])()
        }




        //console.log("## this heading",thisHeading); // Prints the html element in console
        //console.log("## tagnames", tagNames); // prints the text content in console


        //thisHeading?.click()
        //   let aTags = document.getElementsByTagName("a");
        //   let searchText = "Print";
        //   let found;
          
        //   for (let i = 0; i < aTags.length; i++) {
        //       console.log("### aTags", aTags[i].textContent)
        //     if (aTags[i].textContent == searchText) {
        //       found = aTags[i];
        //       break;
        //     }
        //   }
        //   console.log("### found Meatballs",found)
        // found?.click()


// }
// spaghetti();
