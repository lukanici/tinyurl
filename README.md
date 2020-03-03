# TinyURL - Home Assignment

### 1. What is a URL shortening system?
URL shortening system is used to create shorter aliases for long URLs. Users are redirected to the original URL when they hit these short links, but it's much more practical to use short link because it saves a lot of space when displayed or messaged. Additionally, users are less likely to mistype shorter URLs.

### 2. What's the main value? Who needs such a system and why?
One of the major usages is in affiliate marketing, where people promote the product to others and earn a piece of the profit for each sale they make. Affiliate links to products are often very long because they carry information about both the product and the promoter.

### 3. Describe the main mechanism of work and system components.
Given a URL, the system will generate a shorter and unique alias of it. When users access a short link, the system will redirect them to the original link. The system will also keep track of the most popular domains in the last 24h and have them displayed on the admin page for analytical purposes.

### 4. What do you think are the main challenges in implementing and running the system 
The main challenge in implementing and running the system is scaling the system to billions of shordened urls and redirections monthly and keeping the short links unique and short.

### 5. Try to suggest some ideas for advanced features.
Users should optionally be able to pick a custom short link for their URL.
Users should be able to specify the expiration time of the link.
