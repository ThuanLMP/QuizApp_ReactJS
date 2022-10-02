
import Cookies from 'universal-cookie';

const cookies = new Cookies();


export const setCookies = (name, value) => {
    let datenow = new Date()
    let expiry = new Date()
    if(name==='ACCESS_TOKEN_QUIZ_APP'){
        expiry.setSeconds(datenow.getSeconds()+3600)
    }
    else if(name==='REFRESH_TOKEN_QUIZ_APP'){
        expiry.setDate(datenow.getDate()+7)
    }
    
    cookies.set(name, value, { path: '/', expires: expiry });
}
export const getCookies = (name) => {
    return cookies.get(name);
}

export const removeCookies = (listName) => {
    listName.map((value)=>{
        cookies.remove(value)
    })
}

