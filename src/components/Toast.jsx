import React from 'react'
import { motion } from "framer-motion"

const show = {
    opacity: 1,
    display: "block"
};

const hide = {
    opacity: 0,
    transitionEnd: {
        display: "none"
    }
};

const Toast = ({ msg, visible, error }) => {
    return (
        <>
            <motion.div className="toast toast-top toast-end z-50" animate={visible ? show : hide}>
                <div className={"alert " + (error ? 'alert-error' : 'alert-success')}>
                    <div>
                        <span>{msg}</span>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Toast