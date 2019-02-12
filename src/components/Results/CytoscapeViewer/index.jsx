import React from 'react'

import CytoscapeComponent from 'react-cytoscapejs'
import { CxToJs, CyNetworkUtils } from 'cytoscape-cx2js'
import './style.css'

const utils = new CyNetworkUtils()
const cx2js = new CxToJs(utils)

/**
 * Simple wrapper for the Cytoscape viewer
 *
 * @param props
 * @returns {*}
 * @constructor
 */
const CytoscapeViewer = props => {
    const {network} = props;

    if (network === null || network === undefined) {
        return null
    }

    const niceCX = utils.rawCXtoNiceCX(network)
    console.log('NICE ===', niceCX)

    const attributeNameMap = {}
    const elements = cx2js.cyElementsFromNiceCX(niceCX, attributeNameMap)
    const style = cx2js.cyStyleFromNiceCX(niceCX, attributeNameMap)

    console.log('CYJS ===', elements, style)

    const elementsArray = [...elements.nodes, ...elements.edges]
    return (
        <CytoscapeComponent
            className="cytoscape-component"
            elements={elementsArray}
            layout={{ name: 'cose' }}
            style={{ width: '100%', height: '100%' }}
            stylesheet={style}
            cy={cy => {window.cy = cy}}
        />
    )
}

export default CytoscapeViewer
