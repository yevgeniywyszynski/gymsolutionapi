GUI that can add a GUEST MEMBER TO A CLUB through API (AddGuestMember endpoint - /Api/v2/Members/AddGuestMember).
- make sure the credentials are secure and cannot be reused
- focus on the required fields only - firstName, lastName, homeClubId and additionalAddressLine
- there is on dependant *required* field (homeClubId) that you have to query data from the other endpoint in order to get the valid options to choose from

<img src='/public/img/loginForm.png'/>