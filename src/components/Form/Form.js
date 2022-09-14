import React, { useEffect, useState } from 'react';
import styles from '../Form/Form.module.scss';

const Form = ({loadAllClubsRequest, addNewUser, clubsId}) => {

    useEffect(() => {
        loadAllClubsRequest()
    }, [])

    const [name, setName] = useState('')
    const [surname, setSurName] = useState('')
    const [street, setStreet] = useState('Street')
    const [apartaments, setApartaments] = useState('Apartaments')
    const [city, setCity] = useState('City')
    const [clubId, setClubId] = useState('')

    const sendNewUser = () => {
        if(name.length == 0 || isNaN(name) == false){
            alert('wpisz poprawnie swoje imie')
        }
        if(surname.length == 0 || isNaN(surname) == false){
            alert('wpisz swoje nazwisko poprawnie')
        }
        if(clubId.length == 0){
            alert('clubId jest nie zaznaczony')
        }
        
        let newUser = {
            homeClubId: clubId,
            personalData: {
                firstName: name,
                lastName: surname,
            },
            addressData:{
                additionalAddressLine: `${street} ${apartaments} ${city}`
            }
        }
        addNewUser(newUser)
    }

    return(
        <div className={styles.formContainer}>
            <div className={styles.formWrapper}>
                <div className={styles.userInformation}>
                    <label className={styles.description}>Your Name</label>
                    <div className={styles.inputWrapper}>
                        <input 
                            className={styles.userInformationInput} 
                            type="text" 
                            placeholder='First Name'
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            className={styles.userInformationInput}
                            type="text"
                            placeholder="Last Name"
                            onChange={(e) => setSurName(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.userInformation}>
                    <label className={styles.description}>Addres Line</label>
                    <div className={styles.inputWrapperAdress}>
                        <input 
                            className={styles.userInformationInput}
                            type="text"
                            placeholder={street}
                            onChange={(e) => setStreet(e.target.value)}
                        />
                        <input
                            className={styles.userInformationInput}
                            type="text"
                            placeholder={apartaments}
                            onChange={(e) => setApartaments(e.target.value)}
                        />
                        <input
                            className={styles.userInformationInput}
                            type="text"
                            placeholder={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                </div>
                <div className={styles.userInformation}>
                    <label className={styles.description}>HomeClub Id</label>
                    <div className={styles.inputWrapperThree}>
                        <select className={styles.clubsList} id="homeClubs" name="homeClubs" onChange={(e) => setClubId(e.target.value)}>
                            {clubsId.map(id => (
                                <option key={id} value={id}>{id}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <div>
                        <button 
                            className={styles.sendBtn}
                            onClick={() => sendNewUser()} 
                            type="submit"> 
                            SUBMIT FORM
                        </button>
                    </div>
                    <div className={styles.logoWrapper}>
                        <img className={styles.logo} alt="logo" src={'/img/logo1.png'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form;