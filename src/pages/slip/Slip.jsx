
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 

const Slip = () => {
    const { transId } = useParams();
    console.log(transId);
 

    useEffect(() => {
              axios.get(`http://localhost:3000/payment/success/${transId}`)
                .then(res => {
                 console.log(res.data);
                })
          
    }, [transId]);


    return (
        <div>
            {/* <h1>Payment Success</h1>
            {paymentData ? (
                <div>
                    <p><strong>Name:</strong> {paymentData.formInfo.name}</p>
                    <p><strong>Email:</strong> {paymentData.formInfo.email}</p>
                    <p><strong>Total Amount:</strong> {paymentData.formInfo.total}</p>
                    <p><strong>Transaction ID:</strong> {paymentData.transId}</p>
                    <p><strong>Paid Status:</strong> {paymentData.paidStatus ? "Paid" : "Not Paid"}</p>
                </div>
            ) : (
                <p>Payment data not found.</p>
            )} */}
        </div>
    );
};

export default Slip;
