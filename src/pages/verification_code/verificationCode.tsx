import logo from "../../assets/Logo2b .png"
import Button from '../../components/component/button/button'
import { Link } from 'react-router-dom'
import "./verificationCode.css"
import { useNavigate } from 'react-router-dom'
import Footer from '../../layout/footer'
import { useState,useEffect,useRef } from 'react'


function verificationCode():React.ReactElement {

  // LOGIC FOR INPUT OF VALIDATION CODE
  const correctOTP = "123456" 
  const [otp, setotp] = useState(new Array(6).fill(''))
  const [otpError, setOtpError] = useState<null | string>(null);
  const [ifCorrect, setifCorrect] = useState(false)
  const otpBoxReference = useRef<HTMLInputElement[]>([]); 


  function handleChange(value:string, index:number):void {
    Number(value)
    let newArr = [...otp];
    newArr[index] = value;
    setotp(newArr);

    if(value && index < 5){
      otpBoxReference.current[index + 1].focus()
    }
  }

  function handleBackspaceAndEnter(e:React.KeyboardEvent<HTMLInputElement>, index:number) {
    if(e.key === "Backspace" && !e.currentTarget.value && index > 0){
      otpBoxReference.current[index - 1].focus()
    }
    if(e.key === "Enter" && e.currentTarget.value && index < 5){
      otpBoxReference.current[index + 1].focus()
    }
  }



  useEffect(() => { 
    if(otp.join("") !== "" && otp.join("") !== correctOTP){
      setOtpError("Wrong OTP")
      setifCorrect(false)
    }else if (otp.join("") !== "" && otp.join("") === correctOTP){
      setifCorrect(true)
      setOtpError(null)
    }
    else{
      setOtpError(null)
    } 
   }, [otp]);





    let navigate=useNavigate();

  const handleClick=()=>{
    return navigate('/newpassword')
  };
  
  return (
    <>
    <div className='vc-container'>
   {/* LOGO */}
   <img className='vc-logo' src={logo} alt="RestAday logo" />
   
   <span className='vc-text'>Enter</span>
   
   <h1 className='vc-heading'>Verification code</h1>

   <span  className='vc-greyText'>Enter code sent to your mobile we will send you SMS 6 digit confirmation code.</span>
    
    {/* 6 DIGIT BOX */}
    <div className='vc-inputs'>
    {otp.map((digit:number, index:number)=>(
        <input className='vc-input' type="text" key={index} value={digit}  maxLength={1} step="1" 
        onChange={(e) => handleChange(e.target.value, index)}
        onKeyUp={(e)=> handleBackspaceAndEnter(e, index)}
        ref={(reference) => (otpBoxReference.current[index] = reference as HTMLInputElement)}
        />
      
      ))}

        


    </div> 
    
    {/* Error */}
    
    {ifCorrect ? <p className="vc-correct">Correct OTP</p> : <p className='vc-error'>{otpError}</p>}

    

    {/* BUTTON COMPONENT */}
    <Button text="Verify" dark={false} onClick={handleClick}/>
    
    <div className='vc-two-comp'>
    <span className='vc-lasttext'>if you not receive code then please click  </span>
    <Link className='vc-resend' to="/">Resend Code</Link>
    </div>


    </div>
    <Footer/>
    </>
  )
}

export default verificationCode