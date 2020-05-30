import React from 'react'
import {Card, CardContent, Typography} from '@material-ui/core'
import fp from 'lodash/fp'

const SkillsCard = props => {
  const {
    title="",
    subTitle="",
    contents=[]
  } = props

  return (
    <Card>
      <CardContent>
        <Typography variant="h4">
          {title}
        </Typography>
        <Typography variant="body1">
          풀스택 개발자를 지향하고 있습니다
        </Typography>
        <Typography variant="subtitle1">
          사용하는 언어
        </Typography>
        <Typography variant="body2">
          언어
        </Typography>
        <Typography variant="body2">
          언어
        </Typography>
        <Typography variant="subtitle1">
          사용하는 언어
        </Typography>
        <Typography variant="body2">
          언어
        </Typography>
        <Typography variant="body2">
          언어
        </Typography>
      </CardContent>
    </Card>
  )
}

export default SkillsCard