# QUESTIONS:
1. Should docstrings in ts be as verbose anymore?

2. An import path can only end with a '.ts' extension when 'allowImportingTsExtensions' is enabled.ts(5097)

3. does it go to the right or left? What is going on on the right side?

    const data: tShowInfo[] = await response.json() as Promise<tShowInfo[]>;

4. what is exactly happening here with &?
    I want to overide the tShowInfo image key
    similar to {...obj1, ...obj2, key: final-value}
``` ts
show: tShowInfo & {image: {medium: string, original: string} | undefined },
```