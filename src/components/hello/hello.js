import React from 'react';
import styles from './hello.module.css'

export default function AppHello ({name = 'user'}){
    return <div className={styles.box}>
        <h2 className={styles.alert}>Hello, {name}</h2>
    </div>;
};