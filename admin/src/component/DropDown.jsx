import { useState, useEffect, useCallback } from "react";
export default function useDropdown(dropEl, actionEl) {
     dropEl = dropEl.current;
     actionEl = actionEl.current;

    const [drop, setDrop] = useState(false);

    const toggleDrop = useCallback(() => {
        setDrop(!drop);
    },[drop]);
    const onWindowClick = (event) => {
        const clickOnAction =  actionEl && (event.target === actionEl || actionEl.contains(event.target));
        const clickOnDrop = dropEl && (event.target === dropEl ||  dropEl.contains(event.target) )
       
        if(!clickOnAction  && !clickOnDrop && drop === true) {
            setDrop(!drop);
        }
    }
    const onEsc = useCallback((event) => {
        if (event.keyCode === 27 && drop === true) {
            setDrop(false);
        }
    },[drop])
    useEffect(() => {
        document.addEventListener('click',onWindowClick );
        return () =>  document.removeEventListener('click', onWindowClick);
    })
    useEffect(() => {
        document.addEventListener('keyup', onEsc );
        return () => document.removeEventListener('keyup', onEsc);
    })
    return [drop,toggleDrop];
}