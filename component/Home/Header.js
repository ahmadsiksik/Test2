import { Fragment, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import classes from './Header.module.css'
import Link from 'next/link';

const Header = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

      
    return (
        <Fragment>
            <div  className={classes.bg_image} data-aos={"fade-left"} >
            <h1 className={classes.header} ><b>".تبرعك بالدم يمكن أن يكون شريان الحياة لشخص محتاج. كن بطلاً وامنح الحياة"</b></h1>
            </div>

            <h2>بنك الدم</h2>

            <div className={classes.flexContainer}>

                <div data-aos={"fade-right"} className={classes.card}>
               <div className={classes.container}>
                        <h4><b> انشاء حساب </b></h4>
                        <p className={classes.p}>  <Link href='/'>اذا كنت لا تملك حساب اضغط هنا لانشاء حساب جديد</Link></p>
                        </div>
                </div>
    
                <div data-aos={"fade-left"} className={classes.card}>
                    <div className={classes.container}>
                        <h4><b>تسجيل دخول</b></h4>
                        <p className={classes.p}><Link href='/SignIn'>اذا كنت تملك حساب اضغط هنا لتسجيل الدخول</Link></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Header;






