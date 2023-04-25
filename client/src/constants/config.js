export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title:'Loading',
        message:'Data is being loaded',
    },
    Success:{
        title:'Success',
        message:'data successfully loaded'
    },
    responseFailure:{
        title:'Error',
        message:'error in fetching data'
    },
    requestFailure:{
        title:'Error',
        message:'error in parsing the data'
    },
    networkError:{
        title:'Error',
        message:'unable to connect with server'
    }
}

export const SERVICE_URLS = {
    userSignUp: { url:'/signup',method:'POST', },
    userLogin: { url:'/login',method:'POST', },
    uploadFile: { url:'/file/upload',method:'POST', },
    createPost: {url:'/create',method:'POST'},
    getAllPosts:{url:'/posts',method:'GET'},
}