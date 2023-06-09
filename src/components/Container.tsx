import React from 'react'

export default function Container(props:{ containerClass: string; children: React.ReactNode }) {
  return (
    <section className={props.containerClass}>
        <div className='container-xxl'>
            {props.children}
        </div>
    </section>
  )
}
