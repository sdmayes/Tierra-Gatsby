import React from 'react'
import Twitter from "../../images/Social/twitter"
import Facebook from "../../images/Social/facebook"
import Instagram from "../../images/Social/instagram"

const Social = () => {
    return (
    <div class="flex justify-between">
        <Twitter class="mr-4" width="30px" />
        <Facebook class="mr-4" width="30px" />
        <Instagram width="30px" />
    </div>
    )
}

export default Social
