import * as React from 'react'
import Button from 'material-ui/Button'

export namespace ConnectionStep {
  export interface Props {
    serverId: string
    connectedClients: any[]
  }
}

export const ConnectionStep: React.SFC<ConnectionStep.Props> = ({ children, serverId }) => {
  return (
    <div style={connectionStepStyle}>
      <div style={serverIdConnectionHeaderStyle}>
        Server id
      </div>

      <div style={serverIdStyle}>
        {serverId}
      </div>

      <Button raised style={startMentometerStyle}>
        Start mentometer
      </Button>

    </div>
  )
}

const connectionStepStyle: React.CSSProperties = {
  width: 'calc(100% - 80px)',
  marginLeft: '40px',
  marginRight: '40px',
}

const serverIdStyle: React.CSSProperties = {
  fontSize: '35px',
  fontWeight: 200,
  fontFamily: 'Roboto',
  textAlign: 'center',
  color: '#fff',
  background: 'rgba(255,255,255,0.2)',
  borderRadius: '20px',
  padding: '10px'
}

const startMentometerStyle: React.CSSProperties = {
  width: '100%',
  marginTop: '30px'
}

const serverIdConnectionHeaderStyle: React.CSSProperties = {
  fontSize: '25px',
  fontWeight: 200,
  color: '#fff',
  fontFamily: 'Roboto',
  textAlign: 'center',
  padding: '10px',
  textTransform: 'uppercase'
}