
## Project Code :  
   ```
    tough-health-8180
   ```

## Project Name : 
   ```
   DENTCARE
   ```

<br>

## Deployed Link :

   - Frontend: https://dentcare24x7.netlify.app/
   - Backend: https://dent-care-backend-aa29.onrender.com


<br>

# What are the requirements ?

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
- Real time chat support
- Feedback 
- Logout 



# Tech stack 

### Frontend 

- Bootstrap / HTML / CSS / JavaScript / React 

### Backend 
 
- NodeJS 
- ExpressJS

- Database : MongoDB 



# Schema : 

- user 
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



- services 
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


## 
<br>

# API Endpoints 

<h3>
    <strong>
      <a href="https://dent-care-backend-aa29.onrender.com/api-docs">Swagger Docs</a>
    </strong>
</h3>

<br>
<br>

# Additional 
- we can give home services

<br>

<h1>HomePage</h1>
<img src="https://github.com/aniketbabariya24/tough-health-8180/assets/112626195/e8d835dc-e346-41f9-9e29-e9d448fc39d7" alt="">

<br>

<h1>LogIn / Sign up page</h1>
<img src="https://github.com/aniketbabariya24/tough-health-8180/assets/112626195/d6d4a31a-0287-413e-b3e5-825c9ba4c477" alt="">

<br>

<h1>Service Page</h1>
<img src="https://github.com/aniketbabariya24/tough-health-8180/assets/112626195/202ad3b2-8f87-4f60-8c06-1b1ede6c5748" alt="">

<br>

<h1>Doctors Page</h1>
<img src="https://github.com/aniketbabariya24/tough-health-8180/assets/112626195/ec4b0cfd-a109-4fd5-b01b-f7f2adff2d7f" alt="">

<br>

<h1>Appoinment Book Page</h1>
<img src="https://github.com/aniketbabariya24/tough-health-8180/assets/112626195/6dcca0dd-bf38-4db5-a7c3-7eeb11097ec4" alt="">

<br>

<h1>Admin Page</h1>
<img src="https://github.com/aniketbabariya24/tough-health-8180/assets/112626195/c7f9683e-e933-467b-b792-02007a1154bb" alt="">

