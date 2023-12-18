export default Endpoint = {
    baseUrl: 'http://192.168.43.247/prime_top_api',
    wallet:{
        bal:'getBal/',
        fund:'fundwallet/',
    },   
    auth:{
        register:  'create-account/',
        login:  'login/', 
        recover:  'forgotpassword/',  
    },
    topup:{
        airtime:'airtime/',
        data:'data/',
    },
    tx:{
        read:'transactions/read/',
        create:'transactions/create/',
    }
}