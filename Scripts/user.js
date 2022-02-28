(function(core){

    class User
    {
        // getters and setters
        get DisplayName()
        {
            return this.m_displayName;
        }
    
        set DisplayName(display_name)
        {
            this.m_displayName = display_name;
        }
    
        get EmailAddress()
        {
            return this.m_emailAddress;
        }
    
        set EmailAddress(email_address)
        {
            this.m_emailAddress = email_address;
        }

        get UserName()
        {
            return this.m_userName;
        }
    
        set UserName(user_name)
        {
            this.m_userName = user_name;
        }

        get Password()
        {
            return this.m_password;
        }
    
        set Password(password)
        {
            this.m_password = password;
        }

        // constructor
        constructor(displayName = "", emailAddress = "", username ="", password = "")
        {
            this.DisplayName = displayName;
            this.EmailAddress = emailAddress;
            this.Username = username;
            this.Password = password;
        }

        // overriden methods
        toString()
        {
            return `Display Name : ${this.DisplayName}\nEmail Address : ${this.EmailAddress}\nUsername : ${this.Username}\nPassword : ${this.Password}`;
        }

        // utility methods
        toJSON()
        {
            return {
                "DisplayName": this.DisplayName,
                "EmailAddress": this.EmailAddress,
                "Username": this.Username
            }
        }

        fromJSON(data)
        {
            this.DisplayName = data.DisplayName;
            this.EmailAddress = data.EmailAddress;
            this.Username = data.Username;
            this.Password = data.Password;
        }

        serialize()
        {
            if(this.DisplayName !== "" && this.EmailAddress !== "" && this.Username !== "")
            {
                return `${this.DisplayName},${this.EmailAddress},${this.Username}`;
            }
            console.error("One or more properties of the User Object are missing or invalid");
            return null;
        }
    
        deserialize(data) // assume that data is in a comma-separated format (string array of properties)
        {
            let propertyArray = data.split(",");
            this.DisplayName = propertyArray[0];
            this.EmailAddress = propertyArray[1];
            this.Username = propertyArray[2];
        }
    }

    core.User = User;

})(core || (core={}));