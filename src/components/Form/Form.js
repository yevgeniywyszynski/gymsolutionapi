import React, { useEffect } from 'react';
import styles from '../Form/Form.module.scss';

const Form = ({loadAllClubsRequest}) => {

    useEffect(() => {
        console.log('test', loadAllClubsRequest())
    }, [])

    return(
        <div className={styles.formContainer}>
            <form className={styles.formWrapper}>
                <div className={styles.userInformation}>
                    <label className={styles.description}>Your Name</label>
                    <div className={styles.inputWrapper}>
                        <input className={styles.userInformationInput} type="text" placeholder="First Name"/>
                        <input className={styles.userInformationInput} type="text" placeholder="Last Name"/>
                    </div>
                </div>
                <div className={styles.userInformation}>
                    <label className={styles.description}>Addres Line</label>
                    <div className={styles.inputWrapperAdress}>
                        <input className={styles.userInformationInput} type="text" placeholder="Street"/>
                        <input className={styles.userInformationInput} type="text" placeholder="Apartaments"/>
                        <input className={styles.userInformationInput} type="text" placeholder="City"/>
                    </div>
                </div>
                <div className={styles.userInformation}>
                    <label className={styles.description}>HomeClub Id</label>
                    <div className={styles.inputWrapperThree}>
                        <select className={styles.clubsList} id="homeClubs" name="homeClubs">
                            <option value="club1">club1</option>
                            <option value="club2">club2</option>
                            <option value="club3">club3</option>
                            <option value="club4">club4</option>
                        </select>
                    </div>
                </div>
                <div className={styles.buttonWrapper}>
                    <div>
                        <button className={styles.sendBtn} type="submit"> SUBMIT FORM</button>
                    </div>
                    <div className={styles.logoWrapper}>
                        <img className={styles.logo} alt="logo" src={'/img/logo1.png'}/>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default Form;