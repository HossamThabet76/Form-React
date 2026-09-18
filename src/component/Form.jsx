import {useState} from 'react'
export default function Form(){
    const [input,setInput]=useState({
        name:'',
        phone:'',
        age:'',
        checked:false,
        selected:'Less than 500$',
    });
    let bag=input.phone.length>0&&input.name!=''&&input.age.length>0?'#e80e0e':'#999'
    return(
    <>
    <div className="form">
        <h1>Requesting a Loan</h1><hr />
        <form action="">
            <label>Name</label>
            <input type="text" 
                value={input.name} 
                onChange={(e)=>{
                    setInput({...input,name:e.target.value})
                }}/>
            <label>Phone Number</label>
            <input type="number" 
                value={input.phone} 
                onChange={(e)=>{
                    setInput({...input,phone:e.target.value})
                }}/>
            <label>Age</label>
            <input type="number" 
                value={input.age} 
                onChange={(e)=>{
                    setInput({...input,age:e.target.value})
                }}/>
            <label>Are You an Employee?</label>
            <input type="checkbox" 
                checked={input.checked} 
                onChange={(e)=>{
                    setInput({...input,checked:e.target.checked})
                }}/>
            <label>Salary</label>
            <select 
                onChange={(e)=>{
                    setInput({...input,selected:e.target.value})
                }}>
                <option>Less than 500$</option>
                <option>Between 500$ and 2000$</option>
                <option>Above 2000$</option>
            </select>
            <button type='button'
                style={{background:bag}}
                onClick={()=>{
                    if(input.phone.length>=10&&input.phone.length<=12&&input.name!=''&&input.age>=18&&input.age<=60){
                        document.querySelector('.container').style.display='block'
                        document.querySelector('.message').style.display='block'
                        document.querySelector('.message').textContent='The Form Has Been Submitted Successfully';
                        document.querySelector('.message').style.color='green';
                    }
                    else if(input.name==''){
                        document.querySelector('.container').style.display='block';
                        document.querySelector('.message').style.display='block';
                        document.querySelector('.message').textContent='name is Not allowed';
                        document.querySelector('.message').style.color='red';
                    }
                    else if(input.phone.length<10||input.phone.length>12){
                        document.querySelector('.container').style.display='block';
                        document.querySelector('.message').style.display='block';
                        document.querySelector('.message').textContent='Phone Number is Not allowed';
                        document.querySelector('.message').style.color='red';
                    }
                    else if(input.age<18||input.age>60){
                        document.querySelector('.container').style.display='block';
                        document.querySelector('.message').style.display='block';
                        document.querySelector('.message').textContent='Age is Not allowed';
                        document.querySelector('.message').style.color='red';
                    }
                    else{
                        document.querySelector('.container').style.display='block';
                        document.querySelector('.message').style.display='block';
                        document.querySelector('.message').textContent='The Form Has Been Submitted Successfully';
                        document.querySelector('.message').style.color='green';
                    }
                }}
                >
                Submit
            </button>
        </form>
    </div>
    </>
    )
}