import React from 'react'
import { Games } from '../../components/MainComponents/Games'
import MainLayout from '../../components/MainComponents/MainLayount'

const CrazyTime = () => {
  return (
    <MainLayout>
        <div className="flex w-full h-screen justify-center z-20">
            <div className="flex w-full justify-center">
                <Games game="Crazy Time" provider="Evolution" demo="https://launcher-eu1.fh8labs.com/games/encrypted/launcher?payload=QTEyOEdDTQ.reTetRpte10zqn7SUmCYMYRID-DMvu-TGMuD9QgXNr3u8gfqQoA1s0tiIjs.YVTZv9rLnjjMN6ro.5pHwBjDByFTNd2V26NOJ42K60NJ8wSczvN0Jq2kl5WVcDYwUg0ROPdWhhd9X2dMpkvBsT-K0AfSgdUERSTdBU3UpaaTy2AMKWzs87iEUD7npor0FUjSpg5fskpkLIEuXbuBI7PyHiWJCuvdfx9L3N8Ab3DT7nK8xPRWWBdVbgULdnWzWvYmy3DZ1vHjBV6alYoAe_NF7J0M6nrPCyuAbWEdKd-7eqNxBSNlGf7bkronZ9vv0FTMfEmSj62zw5jyeO7nPenYfdABMaByFWY5Oz31xso_DWVi2WfTQOEuSIhP1ZUJDZJZavx2E6ZbV8LWijNf9oa-9tp9tvutWwFur-sfgeqaCfy3M3Y6fCvCjbm--oe7uy1fGDK7kX8kn95z2ex5GF0sCUzFRr-541AmAGIoznzlgbL6TNj18IIzwl9HSn1iF3E7x3bSpAcjBHkKt5OlvRqDOTmS_2g7bN9q_3g.eQjXD8fp-UMZO4EtG9LBdQ" title="Crazy Time"/>
            </div>
        </div>
    </MainLayout>
  )
}

export default CrazyTime