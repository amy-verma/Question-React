1. Use default React XSS protection with data binding
   Ans- React automatically escapes all values injected into JSX to prevent Cross-Site Scripting (XSS) attacks.

- To stop XSS attacks in React, just use the normal way of showing data — by putting it inside {} (curly braces).
<div>{data}</div>
  
  Dont's
- Avoid dynamic attribute values without custom validation.
- Don't directly use dynamic data (like user input or API values) inside HTML attributes (like action, href, or src) without checking if the value is safe.
  Don't do this:

## <form action={data}>...</form>

2. Watch out for dangerous URLs and URL-based script injection

- Some links (URLs) can be dangerous — especially ones that start with:
- javascript:alert('hacked')
- If you let such links get into your app (for example in an anchor tag like <a href={userInput}>), clicking on them can run harmful JavaScript code.

✅ What should you do?

- Allow only safe links — ones that start with http: or https:.
- Allow only safe links — ones that start with http: or https:.
- You can use JavaScript’s URL() object to check if the link is safe.

function isValidURL(url) {
try {
const parsed = new URL(url);
return parsed.protocol === "http:" || parsed.protocol === "https:";
} catch (err) {
return false;
}
}

- This checks if the URL starts with http: or https: — and blocks anything else like javascript: or data:.

---

3.  Sanitize and render HTML

- Sometimes, you may need to show HTML content that comes from user input or external sources (like an API).
  But that content might contain malicious code (like <script>alert("hacked")</script>).

If you show it directly in React using:

<div dangerouslySetInnerHTML={{ __html: userInput }} />

Solution:
Sanitize the HTML first — which means:

- "Clean the HTML and remove anything dangerous before rendering it."

step 1- You can use libraries like:

- npm install dompurify

Then:

import DOMPurify from 'dompurify';

const cleanHTML = DOMPurify.sanitize(userInput);

<div dangerouslySetInnerHTML={{ __html: cleanHTML }} />

- “If you really need to show raw HTML in React, first clean it to remove any harmful code — otherwise your app might get hacked.”

---

4. Avoid direct DOM access — explained simply

- React manages the DOM (HTML elements) for you using something called the Virtual DOM.
- So instead of manually accessing or changing the page using:
  document.getElementById("something")
  document.querySelector(".some-class")

- What to do instead:
- Use state, props, and refs to interact with elements.

5 . Secure React server-side rendering
