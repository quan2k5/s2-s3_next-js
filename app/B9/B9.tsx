import React from 'react'
import Alert from './Alert'
export default function B9() {
  return (
    <div>
      <div>
        <Alert type='success' children='Success'/>
      </div>
      <div>
      <Alert type='info' children='infor'/>
      </div>
      <div>
      <Alert type='warning' children='warning'/>
      </div>
      <div>
      <Alert type='error' children='error'/>
      </div>
    </div>
  )
}