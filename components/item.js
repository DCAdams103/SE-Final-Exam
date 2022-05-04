import {withStyles} from '@material-ui/core'
import {Box} from '@material-ui/core'
import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const ItemBoxStyling = withStyles({
    root: {
        width: "100%",
        height: "100%",
        maxWidth: '100%',
        maxHeight: '100%',
        background: 'linear-gradient(45deg, rgba(106,61,210,.3), rgba(61,66,210,.3))',
        margin: '.5%',
        marginTop: '1.5%',
        boxShadow: '0 3px 5px 2px rgba(0,0,0,.3)',
        border: '1px solid rgba(0,0,0,.5)',
        borderRadius: '10px',
    }
})(Box)

export function ItemBox(){
    return(
        <ItemBoxStyling display='block' justifyContent='center'>

            <Image src="/item.png" alt="Shop Logo" width={413} height={295} className={styles.itemPhoto} />

        </ItemBoxStyling>
    )
}