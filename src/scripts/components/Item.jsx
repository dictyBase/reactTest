import React from 'react';
import Radium from 'radium';

@Radium
export default class Item extends React.Component {
    displayName = 'Navigation bar item'

    static propTypes = {
        link:  React.PropTypes.string,
        title: React.PropTypes.string,
        style: React.PropTypes.object
    }

    getStyles = () => {
      return {
          base: {
              position: 'relative',
              display: 'block',

              '@media (min-width: 768px)': {
                  float: 'left'
              }
          },
          link: {
              padding: '10px 15px',
              lineHeight: '20px',
              position: 'relative',
              display: 'block',
              boxSizing: 'border-box',
              textDecoration: 'none',
              backgroundColor: 'transparent',
              color: '#777',

              ':hover': {
                  color: '#333',
                  backgroundColor: 'transparent'
              },

              ':focus': {
                  color: '#333',
                  backgroundColor: 'transparent'
              },

              '@media (min-width: 768px)': {
                  paddingTop: '15px',
                  paddingBottom: '15px'
              }
          }
      };
    }

    render() {
      const defStyle = this.getStyles();
      const {style, link, title} = this.props;
      return (
        <li key="list" style={[defStyle.base, style && style]}>
            <a href={link} style={[defStyle.link]}>{title}</a>
        </li>
      );
    }
}
