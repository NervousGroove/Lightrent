# 🌌 Lightrent

Lightrent is the most secure way to protect your users, ensuring the privacy and confidentiality of their personal information. Developed with a focus on security and simplicity, Lightrent offers a lightweight and user-friendly solution.

## ⚔️ Key Features

- **Comprehensive Security**: Lightrent employs end-to-end encryption to safeguard user information from unauthorized access.
- **Ease of Use and Lightweight**: Lightrent is designed to be easy to use and lightweight, ensuring optimal performance without resource overload.
- **Free and Closed Source**: Lightrent is free to use but not open-source, allowing for secure implementation and customization.
- **End-to-End Encryption**: Lightrent utilizes end-to-end encryption to ensure that user data remains secure and protected.
- **No SQL Database**: Lightrent does not rely on traditional SQL databases, eliminating risks associated with data breaches.
- **Unlimited Scalability**: Lightrent is built to handle millions of records efficiently, allowing for rapid processing of vast amounts of information.
- **Server FTP Requirement**: Lightrent requires an FTP server for secure storage of encrypted files.

## 🔌 How to add Lightrent to your project
Lightrent can be added using a script (CDN) easily. Add this script in the **"<head>"** section of your HTML:
```html
  <script src="tst.com"></script>
```

## ⚙️ Status and Version

Lightrent is currently under active development and is in the beta version. We are continuously working to enhance and expand its features, while ensuring system stability and security.

## 🏷 License

Lightrent is protected by copyright, and all rights are reserved by the SwankyNoob team. Usage and distribution of Lightrent are subject to specific terms and conditions defined by SwankyNoob. Please contact us for more information.

## 📋 Documentation

### Handling the data
Lightrent currently allows email and password protection. To do this you just need to change/add IDs to your code. In the email input, add the ID "igrUsername", and in the password input add the ID "igrPassword". Now after setting up the IDs of the inputs, you must add the ID of the button that sends the form. In this button you must add the ID "createIgr".
  
### Getting the data processed
To get the processed data you can use the **igrGetValues()** function. But it is important to know, that by using this function, the user's data will be vulnerable for a millisecond. When using the **igrGetValues()** function you must set the extraction of the encrypted content, like so:
```javascript
let decryptedPassword = decrypt(encryptedPassword);
//Using the email/name
let decryptedUsername = decrypt(encryptedUsername);
```
and so you can get the password in the "decryptedPassword" variable, and the name/email in the decryptedUsername variable.
  
### Saving the data
So far (in the documentation), you have only been taught how to handle and get the data in one session. That is, for example, let's say you want to create a social network, or any other kind of application that has user interaction, you will have to store user information, to display their names, messages, and other interactions. So, for that, you can use the "**igrSave()**" function. This function will create a file on the server with the name defined by the username of the current session (if treated) and the content will be the password. The content will be encrypted. With this you can get this data at any time on the server, making everything possible, like a database, only more secure. But before using the "**igrSave()**" function you need to define your FTP in the "igtFTPpost" variable.
