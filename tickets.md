# QUESTIONS:
1. Should docstrings in ts be as verbose anymore?
    - No, you don't need to be as verbose.
    Still explain the overall concept.

2. An import path can only end with a '.ts' extension when 'allowImportingTsExtensions' is enabled.ts(5097)
    `'allowImportingTsExtensions' is enabled` but this wouldn't be good because we can't use tsc command!

3. does it go to the right or left? What is going on on the right side?

``` ts
const data: tShowInfo[] = await response.json() as Promise<tShowInfo[]>;
```
    - Whichever one you prefer is okay!
    Joel prefers left. "IDC what resp.json() is, I care about data"



4. what is exactly happening here with &?
    I want to overide the tShowInfo image key
    similar to {...obj1, ...obj2, key: final-value}
``` ts
show: tShowInfo & {image: {medium: string, original: string} | undefined },
```
 - YES, that is how it works!

 this would be worse:
 ``` ts
type tShowInfo = {
  id: number,
  name: string,
  summary: string,
  image: string | {image: {medium: string}}, // <--- THIS WOULD BE WORSE THAN USING THE & ABOVE SOLUTION!!
};
 ```

5. What does `thisArg?` refer to in our .map signature? `this` context?
    - YES! Refers to the this argument
``` ts
thisArg?: any): {
    id: number;
    name: string;
    summary: string;
    image: string;
}
```
6. Should we type all data returned from an API or only the data we're destructuring out of the resp?
    - If I'm the API expert, then yes list eveything the API will return!
    If I KNOW I will only need xyz, no need to add anything else.


7. Are Element and HTMLElement viewed as the same thing by TS?
    - Not all elements have their own type
        No section, no nav, no main, etc.

    - Sometimes you will have to upgrade Element to HTMLElement as
    Element doesn't have innerText or inner blah blah blah.



8. Why would evt.target ever be null?
`https://github.com/vuejs/vue/issues/7027`
    -  you have no guarantee for the event to be valid in an asynchronous callback after it is used. So basically you have to save whatever you need, in your case, target, and use that instead of the event variable directly

    - We can fire off our own events, could be null that way!
    https://developer.mozilla.org/en-US/docs/Web/Events/Creating_and_triggering_events
    Very rare for null if the browser fires off the event!.. except for async like above.

## FIXES:
1. status: number = 200 in apiMock.ts
    We don't need the number here since we have a default

2. have type of tHTTPMethods in apiMock.ts

## LEARNING
Don't let the perfect be the enemy of the good! Sometimes it is okay to do any
If it is a super complex type, might be better.
Use the tool to help not drag things down.

2. type docstrings resemble class docstring
    "Who should be using this type?"