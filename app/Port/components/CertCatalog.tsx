import React from 'react'
import { cert } from '@/data/cert'
import CertCard from './CertCard'
export default function CertCatalog() {
  return (
    <>
        <div className="mx-auto mt-10 mb-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        {cert.map((certs) => 
            <CertCard certProps={certs} key={certs.id} />
        )}
        </div>
    </>
  )
}
