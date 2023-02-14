import Link from 'next/link';
import React, { Fragment, useRef } from 'react'
import Nav from '../Home/Nav';
import classes from './Regester.module.css'

export const Regester = () => {
    const Passwordd=useRef();
    const UserNamee = useRef();
    const MobileNumberr = useRef();
    const Eamill = useRef();
    const NationalIDD = useRef();
    const BloodTypee = useRef();
    const Locationn = useRef();
    const Agee = useRef();
    const Weightt = useRef();
    const Genderr = useRef();
    const ChronicDiseasess = useRef();
    const Alcoholl = useRef();
    const Smokerr = useRef();
    const LastDonationn = useRef();

    let url;

    const submitHandler = (event) => {
        event.preventDefault();

        const UserName = UserNamee.current.value;
        const Password = Passwordd.current.value;
        const MobileNumber = MobileNumberr.current.value;
        const Eamil = Eamill.current.value;        
        const NationalID = NationalIDD.current.value;
        const BloodType = BloodTypee.current.value;
        const Location = Locationn.current.value;
        const Age = Agee.current.value;
        const Weight = Weightt.current.value;        
        const Gender = Genderr.current.value;
        const ChronicDiseases = ChronicDiseasess.current.value;
        const Alcohol = Alcoholl.current.value;
        const Smoker = Smokerr.current.value;
        const LastDonation = LastDonationn.current.value;


        url = 'https://c802-82-205-61-196.ngrok.io/?fbclid=IwAR2vSMKun_67SrXYCefhKqFoC6AF3gEhcnVdCeQI8oDIH25MHuQHoPtrejs&format=json';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                username: UserName,
                password: Password,
                mobile_number: MobileNumber,
                email: Eamil,
                national_id: NationalID,
                blood_type: BloodType,
                locatin: Location,
                age: Age,
                wight: Weight,
                gender: Gender,
                chronic_diseases: ChronicDiseases,
                alcohol_addicted: Alcohol,
                smoker: Smoker,
                last_donation: LastDonation,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }


    return (
        <Fragment>
            <div className={classes.main}>
                <div className={classes.overlay}>
                        <div className={classes.content}>
                            <Nav/>
                            <section className={classes.auth}>
                                <h1>{'تسجيل الدخول '}</h1>
                                <form onSubmit={submitHandler}>


                                    <div className={classes.control}>
                                        <label htmlFor='username'>اسم الحساب </label>
                                        <input type='text' id='username' required ref={UserNamee} />
                                    </div>

                                    <div className={classes.control}>
                                        <label htmlFor='password'>كلمة السر</label>
                                        <input
                                            type='password'
                                            id='password'
                                            required      
                                            ref={Passwordd}  
                                        />
                                    </div>

                                    <div className={classes.control}>
                                        <label htmlFor="number">الرقم الجوال</label>
                                        <input type='number' id='number' required ref={MobileNumberr}/>
                                    </div>



                                    <div className={classes.control}>
                                        <label htmlFor='email'>البريد الالكتروني</label>
                                        <input type='email' id='email' required ref={Eamill}/>
                                    </div>


                                    <div className={classes.control}>
                                        <label htmlFor='number'>رقم الهوية</label>
                                        <input type='number' id='number' required ref={NationalIDD}/>
                                    </div>

                                    <div className={classes.control}>
                                        <label htmlFor='text'>زمره الدم</label>
                                        <input type='text' id='text' required ref={BloodTypee} />
                                    </div>

                                    <div className={classes.control}>
                                        <label htmlFor='email'>الموقع</label>
                                        <input type="text" id='email' required ref={Locationn} />
                                    </div>

                                    <div className={classes.control}>
                                        <label htmlFor='email'>الجنس</label>
                                        <input type="text" id='email' required ref={Genderr} />
                                    </div>

                                    <div className={classes.control}>
                                        <label htmlFor='email'>العمر</label>
                                        <input type='number' id='email' required ref={Agee} />
                                    </div>

                                    <div className={classes.control}>
                                        <label htmlFor='email'>الوزن</label>
                                        <input type='number' id='email' required ref={Weightt}/>
                                    </div>

                                    
                                    <div className={classes.control}>
                                        <label htmlFor='email'>امراض مزمنه</label>
                                        <input type='text' id='email' required ref={ChronicDiseasess}/>
                                    </div>


                                    
                                    <div className={classes.control}>
                                        <label htmlFor='email'>مطعاتي للكحول</label>
                                        <input type='text' id='email' required ref={Alcoholl}/>
                                    </div>

                                    
                                    <div className={classes.control}>
                                        <label htmlFor='email'>مدخن</label>
                                        <input type='text' id='email' required ref={Smokerr}/>
                                    </div>

                                    
                                    <div className={classes.control}>
                                        <label htmlFor='email'>اخر مره اتبرعت فيها</label>
                                        <input type="date" id='email' required ref={LastDonationn}/>
                                    </div>


                                    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                                    <label className={classes.label1} for="vehicle1"> اوافق على<Link href={'/'}> الشروط </Link>  </label><br/>
                                    
                                    <div className={classes.actions}>
                                        { (
                                            <button>{"انشاء الحساب"}</button>
                                        )}
                                        <button
                                            type='button'
                                            className={classes.toggle}
                                        >
                                            {'املك حساب بالفعل'}
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
        </Fragment>

    );
}
