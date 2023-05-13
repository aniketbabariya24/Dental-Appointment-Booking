<h1 align="center" style="color:blue"><b>Dental Booking Appointment System</b></h1>

<br>

<p align="center">
<img style="display:block; margin:auto; " src="https://dent-cares.netlify.app/images/logo.png" width="230px" alt="Error 404">
</p>

<br>

## Project Code : `tough-health-8180`
## Project Name : `DENTCARE`

<br>

# About :

<b>This is a Dental Booking Appointment Booking System with Login, Sign up functionality and also having service page, doctors page, appointment booking page and there are doctors who are very experienced.</b>

<br>

## Deployed Link :

   - Frontend: <a href="https://dentcare24x7.netlify.app/">Netlify</a>
   - Backend: <a href="https://dent-care-backend-aa29.onrender.com">Render</a>


<br>

# Requirements : 

- User can login and sign up
    - OTP will be sent by nodmailer
- User can login with google account
- User can visit pages 
- User can see services 
- User can book services / appointments and pay
    - User can view appointment 
    - User rescheduled apointments
    - User can cancel appointment
    - User can book the appointment for someone else.
    - User can give feedback on appointment
    - User can see account details / update them / get previous appointment  
    - User will be notified confirmationi email
- Feedback 
- Logout 

<br>

# Additional Requirements :
- We can give home services

<br>

# Tech stack :

### Frontend 

- HTML
- CSS
- JavaScript

### Backend 

- Node.js 
- Express.js

### Database

- MongoDB 


# Schema : 

- User 
     - name
     - email
     - password

- Dentist 
     - name 
     - email 
     - salary
     - image

- Patient 
     - name 
     - email 
     - salary
     - image

- Services 
    - service_name 
    - service_image
    - service_price
    - service_description
    - service_category 
    - service_by_gender

- Slots 
     - slotID
     - date
     - time


- appointments 
    - stylerid
    - userID
    - serviceId
    - date,
    - time,
    - service_name,
    - service_des,
    - styler_name

<br>

<h1>System Design(HLD)</h1>
<img src="https://github.com/aniketbabariya24/tough-health-8180/assets/112626195/ce8e5a9f-a19b-439f-89e4-e587634c8e36" alt="">

<br>

<h1>Schema Design</h1>
<img src="https://github.com/aniketbabariya24/tough-health-8180/assets/112626195/48fdf084-ed10-4153-82ff-e0aca749bf6f" alt="">

<br>

# API EndPoints :

<h3>
    <strong>
      <a href="https://dent-care-backend-aa29.onrender.com/api-docs" target="_blank">Swagger Docs for Api</a>
    </strong>
</h3>

<br>

## Run Locally

Clone the project

```bash
  git clone https://github.com/aniketbabariya24/tough-health-8180.git
```

Go to the project directory

```bash
  cd Backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
------------
<br>

<h2>HomePage</h2>
<img src="https://github.com/aniketbabariya24/tough-health-8180/assets/112626195/e8d835dc-e346-41f9-9e29-e9d448fc39d7" alt="">

<br>

<h2>Sign In / Sign Up page</h2>
<img src="https://github.com/aniketbabariya24/tough-health-8180/assets/112626195/d6d4a31a-0287-413e-b3e5-825c9ba4c477" alt="">

<br>

<h2>Service Page</h2>
<img src="https://github.com/aniketbabariya24/tough-health-8180/assets/112626195/202ad3b2-8f87-4f60-8c06-1b1ede6c5748" alt="">

<br>

<h2>Doctors Page</h2>
<img src="https://github.com/aniketbabariya24/tough-health-8180/assets/112626195/ec4b0cfd-a109-4fd5-b01b-f7f2adff2d7f" alt="">

<br>

<h2>Appoinment Book Page</h2>
<img src="https://github.com/aniketbabariya24/tough-health-8180/assets/112626195/6dcca0dd-bf38-4db5-a7c3-7eeb11097ec4" alt="">

<br>

<h2>Admin Page</h2>
<img src="https://github.com/aniketbabariya24/tough-health-8180/assets/112626195/c7f9683e-e933-467b-b792-02007a1154bb" alt="">

