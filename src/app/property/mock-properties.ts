import {Property} from './property.model';


const JsonProperties= [
    {
        id:1,
        title: 'Appartement',
        omschrijving: 'Mooi appartement dicht gelegen bij het centrum',
        numbofbath: 2,
        numbofbedr: 4,
        numboftoil: 2,
        parking: true,
        sold: false,
        leased: false,
        location:{number:9,street:"Bekken",district:"Nazareth",postalcode:9810}, 
        reviews: [{id:1,author:{email:"bart@gmail.com",fn:"Bart",ln:"Kramers"},message:"Goed appartement"},{id:2,author:{email:"Peter@gail.com",fn:"Peter",ln:"Colpaert"},message:"Het was een slecht appartement"}],
        user : {email:"stijn.lachat@gmail.com",fn:"Stijn",ln:"Lachat"}
    },
    {
        id:2,
        title: 'Kot',
        omschrijving: 'klein appartement dicht gelegen bij het centrum, mooi uitzicht over stad',
        numbofbath: 1,
        numbofbedr: 2,
        numboftoil: 1,
        parking: false,
        sold: false,
        leased: false,
        location:{number:9,street:"Bekken",district:"Nazareth",postalcode:9810}, 
        reviews: [{id:1,author:{email:"snelle@gmail.com",fn:"Snelle",ln:"Kramers"},message:"Goed appartement"},{id:2,author:{email:"Brenda@gail.com",fn:"Brenda",ln:"Colpaert"},message:"Het was een slecht appartement"}],
        user: {email:"bram.lachat@gmail.com",fn:"Bram",ln:"Lachat"}
    },
    {
        id:3,
        title: 'Kot',
        omschrijving: 'klein appartement dicht gelegen bij het centrum, mooi uitzicht over stad',
        numbofbath: 1,
        numbofbedr: 2,
        numboftoil: 1,
        parking: false,
        sold: false,
        leased: false,
        location:{number:9,street:"Bekken",district:"Nazareth",postalcode:9810}, 
        reviews: [{id:1,author:{email:"snelle@gmail.com",fn:"Snelle",ln:"Kramers"},message:"Goed appartement"},{id:2,author:{email:"Brenda@gail.com",fn:"Brenda",ln:"Colpaert"},message:"Het was een slecht appartement"}],
        user: {email:"bram.lachat@gmail.com",fn:"Bram",ln:"Lachat"}
    },
    {
        id:4,
        title: 'Kot',
        omschrijving: 'klein appartement dicht gelegen bij het centrum, mooi uitzicht over stad',
        numbofbath: 1,
        numbofbedr: 2,
        numboftoil: 1,
        parking: false,
        sold: false,
        leased: false,
        location:{number:9,street:"Bekken",district:"Denderleeuw",postalcode:9810}, 
        reviews: [{id:1,author:{email:"snelle@gmail.com",fn:"Snelle",ln:"Kramers"},message:"Goed appartement"},{id:2,author:{email:"Brenda@gail.com",fn:"Brenda",ln:"Colpaert"},message:"Het was een slecht appartement"}],
        user: {email:"bram.lachat@gmail.com",fn:"Bram",ln:"Lachat"}
    },
    {
        id:5,
        title: 'Bungalow',
        omschrijving: 'Proper, rustige omgeving',
        numbofbath: 1,
        numbofbedr: 2,
        numboftoil: 1,
        parking: false,
        sold: false,
        leased: false,
        location:{number:9,street:"Bekken",district:"Petegem",postalcode:9810}, 
        reviews: [{id:1,author:{email:"snelle@gmail.com",fn:"Snelle",ln:"Kramers"},message:"Goed appartement"},{id:2,author:{email:"Brenda@gail.com",fn:"Brenda",ln:"Colpaert"},message:"Het was een slecht appartement"}],
        user: {email:"bram.lachat@gmail.com",fn:"Bram",ln:"Lachat"}
    },
    {
        id:6,
        title: 'Chalet',
        omschrijving: 'Goed geisoleerd',
        numbofbath: 1,
        numbofbedr: 2,
        numboftoil: 1,
        parking: false,
        sold: false,
        leased: false,
        location:{number:9,street:"Bekken",district:"Deinze",postalcode:9810}, 
        reviews: [{id:1,author:{email:"snelle@gmail.com",fn:"Snelle",ln:"Kramers"},message:"Goed appartement"},{id:2,author:{email:"Brenda@gail.com",fn:"Brenda",ln:"Colpaert"},message:"Het was een slecht appartement"}],
        user: {email:"bram.lachat@gmail.com",fn:"Bram",ln:"Lachat"}
    }
];
export const PROPERTIES: Property[] = JsonProperties.map(Property.fromJson);