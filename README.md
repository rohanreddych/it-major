# it-major
it-major sem5
# IT-major-olx-webcrawler
Web crawler for olx. Sem 5 Internet Technologies
 Using MongoDB cloud database, **I did not want to put mongodb credential on a public repository, when evaluating please use the .env file I sent in mail (rohan.ch.reddy@gmail.com to nks@uohyd.ac.in)**.
# IT-major-project
Web Crawler

✔ Create the first page (home/index page) along with five other web pages for your website
that demonstrates effective application of design elements based on your website plan.

- home
- features
- login
- signup
- contact us
- user pages (5)
- admin page

✔ Effective use of color, images and font and proper page markup language.
- Used images, css, bootstrapm

✔ Utility of html, CSS, javascript and any other languages in implementation.

✔ Interactive features over the website along with contact and enquiry forms.
- Contact Us form.

✔ Validate your HTML code using the Markup Validation service on the website

✔ User registration, Authentication and Page/Form Validation features across the website.
The admin user shall have different pages as compared to normal users. The admin user
can add new users to the system.

- /admin when logged in with admin credentials will go to admin dashboard.
For testing purposes:
Email : admin@admin.com
Password: admin123


✔ Website need to be fully functional (links should work)

✔ Insertion, deletion, updation, search, different types of file upload/download operations,
notifications and alerts based on the application (10 marks). These operations should
implement the Ajax, JQuery and JSON features.



###### All and any third party software have been used with proper lisence.
###### All images and media under proper lisence.
##### Internet connection required for this to run.

### How to run
```
git clone https://github.com/rohanreddych/it-major.git
cd 
npm i
npm run start
```



- If for any item you click on the links in the home page, and it shows   "Oops... we didn't find anything that matches this search :(", then it is an error on olx site maintainers part, not a problem with the web crawler. I have tested this manually and it shows the same error even if you go to the website and navigate to the product.

- Using MongoDB cloud database, so database is not required on local machine. **I did not want to put mongodb credential on a public repository, when evaluating please make an issue i will immediately email you the link**.

### Future Work

- The front page of olx shows almost same posts every time we open the website. This is because they have a default page if you dont allow your location permission, since we are using a library for making requests we cant enable geolocation api permission, in future I will figure out how to send device location while making requests with axios.

- Using a recommender engine based on searches and clicks to recommend products.
