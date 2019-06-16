#First Steps: 

- set up MongoDB database on MongoDB Atlas. 
- follow Brad's instructions for dependencies and basic express server 
- follow Brad's instructions for backend route and connecting MongoDB to the app. 

**Will basically have to follow the course over again to become familiar with the process.**

## Things to consider from the beginning: 
    - not just my data structure is different (in a relatively minor way), but I am allowing the user to add their own categories, and tags. Categories are one to many, but tags are many to many. I'll have to look up how to set this up on both MongoDB and Node. Tags might come later. 
    - Unlike Brad's 'Contact Keeper' app, users will have the ability to share links. This, I believe, is just a matter of configuring the API properly (from private to public), but each user needs to have a private account panel as well. 
    - I only want a finite number of people to use this. Have to find a way to limit users. I think its 3. 

Mongoose allows us to create Models.

This helped solve error had running npm: 

https://stackoverflow.com/questions/42813342/react-createelement-type-is-invalid-expected-a-string

have to look up the `spread` operator as don't really understand it: 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

What does `useEffect` hook do? I have to do some reading on both Hooks and the Context API, since I'm starting to get a little lost. 