
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

   - Frontend: ""
   - Backend: ""


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

- Database : MySQL 



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


