<h2>Introduction</h2>
<p>You can put environemnt variables in .env.local and use them locally</p>
<p>You can also fine tune and use env.development .env.production .env.test</p>
But the problem is that .env files are in .gitignore file so they do not appear in production. The solution is to define them on vercel

<h2>Motivation</h2>
<ul>
<li>How to set enviroment variables per production and preview</li>
</ul>


<h2>Built in environment variable</h2>
You have a list <a href='https://vercel.com/docs/concepts/projects/environment-variables#system-environment-variables'>here</a> but you can access it only on vercel not event on build version locally

<h2>Open issues</h2>
<ul>
<li>i was able to use NEXT_PUBLIC_ with VERCEL_URL to show NEXT_PUBLIC_VERCEL_URL on the browser. But i was not able to do this for an environment variable that i have defined ENV_KEY</li>
</ul>
