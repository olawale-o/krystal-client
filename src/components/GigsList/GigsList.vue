<template>

    <div class="gigs__tabs">
        <Tabs>
            <Tab title="All Gigs" total="3405">                
                <AllGigs />
            </Tab>  
            <Tab title="My Gigs" total="3000">                
                <MyGigs />
            </Tab>
             <Tab title="Rejected Gigs" total="2005">                
                <RejectedGigs />
            </Tab> 
        </Tabs>
    </div>

    
</template>

<script>
        
    import AllGigs  from '@/components/AllGigs/AllGigs';
    import RejectedGigs  from '@/components/RejectedGigs/RejectedGigs';
    import MyGigs  from '@/components/MyGigs/MyGigs';
    import Tab  from '@/components/shared/Tab';
    import Tabs from '@/components/shared/Tabs';
    export default {
        name: 'GigsList',
        components: {AllGigs, Tab, Tabs, RejectedGigs, MyGigs},
       
        setup(){
            
        }
    }
</script>

<style src= "./GigList.css">

</style>