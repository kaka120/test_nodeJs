const Schema = require('../helpers/model_library_support');

const schema = new Schema.Schema({
        username: { type: String,required: true },                                //  Concatination of firstname and secondname
        userid: { type: String, required: true },                                 //  Id of the registration table
        ticket_creation_date: {type: Date, default: Date.now},                    //  Only ticket creation time
        ticket_incident_type: {type: String,required: true },                     //  Only ticket creation time
        ticket_status: { type: String, default: "Open" },                         //  Only ticket creation time [ Update possible [ Status: Open,closed ]]
        ticket_closingn_date: {type: Date, default: null},                        //  Only at closing time      [ Update possible]
        ticket_priority: { type: String, required: true, default: "Low" },        //  At any time               [ Update possible [ Status: Urgent,High,Low] ]   
        ticket_action: { type: String, required: true, default: "New Ticket" },   //  At any time               [ Update possible [ Status: Solved,UnAnswared,Answared,New_ticket] ]      
        ticket_description: { type:  String, default: null },                     //  Only at creation time of ticket
        ticket_catagory: { type:  String , required: true},                       //  At any time               [ Update possible] 
        ticket_sub_catagory: { type: String , required: true},                    //  At any time               [ Update possible]
        location: { type: String , required: true},                               //  Only ticket creation time     
        ticket_chat_group_id: { type: String, default: null }                     //  Only when if chat is started for an specific ticket 
});


schema.set('toJSON', { virtuals: true });

module.exports = Schema.mongoose.model('ticket_registration_table', schema);


    
    