import { EditableText } from '@blueprintjs/core'
import { injectGlobal } from 'styled-components'
import { parseSearchToQuery } from '../../utils/parse-search-to-query'
import { withRouter } from 'react-router-dom'
import * as Styled from './RepositoryMeta.style'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

/*eslint-disable no-unused-expressions */
injectGlobal`
.pt-editable-text:hover::before {
  box-shadow: none;
}

.pt-editable-text {
  max-height: 23px !important;
}

.pt-editable-content {
  outline: none;
}

.pt-editable-text::before {
  outline: none !important;
  box-shadow: none !important;
}

.pt-editable-input {
  outline: none !important;
  box-shadow: none !important;
}
`

const REPOSITORY_META_ACTION_BUTTON_CLASS = 'repository-meta__button'
const STATUS_NEW = 'new'
const EDITABLE_KEY = {
  NOTE: 'note',
  NAME: 'name'
}

class RepositoryMeta extends Component {
  static propTypes = {
    repositoryMetaData: PropTypes.object
  }

  static defaultProps = {
    repositoryMetaData: {}
  }

  constructor(props) {
    super(props)
    const { name, note } = props.repositoryMetaData
    this.state = {
      name,
      note,
      metaSelectorVisibility: false
    }
  }

  componentDidMount() {
    const { status } = parseSearchToQuery()

    if (status === STATUS_NEW) {
      this.toggleNameEditing()
    }
  }

  componentDidUpdate(prevProps) {
    const { status } = parseSearchToQuery()
    const { repositoryId } = this.props
    const prevRepositoryId = prevProps.repositoryId

    if (repositoryId !== prevRepositoryId && status === STATUS_NEW) {
      this.toggleNameEditing()
    }
  }

  componentWillReceiveProps(nextProps) {
    const { name, note } = nextProps.repositoryMetaData
    const { repositoryMetaData } = this.props
    if (repositoryMetaData.name !== name || repositoryMetaData.note !== note) {
      this.setState({
        name,
        note
      })
    }
  }

  toggleNameEditing = () => {
    this._noteInput.toggleEditing()
  }

  /**
   * Update selector dropdown visibility
   * This is just a wrap function for `setState` this might be removed
   *
   * @param {boolean} state
   * @memberof RepositoryMeta
   * @private
   */
  updateMetaSelectorVisibility(state) {
    this.setState({
      metaSelectorVisibility: state
    })
  }

  /**
   * Toggle selector dropdown visibility
   *
   * @memberof RepositoryMeta
   * @private
   */
  toggleMetaSelectorVisibility() {
    const { metaSelectorVisibility } = this.state

    this.updateMetaSelectorVisibility(!metaSelectorVisibility)
  }

  /**
   * Event handler for project delete click event
   * Currently this is a specific target event click handler
   * This click handler should be a generic function and use a `switch`
   * to determine which logic group should be triggered
   *
   * @param {String} uid
   * @param {String} repositoryId
   * @memberof RepositoryMeta
   * @private
   */
  handleProjectDeleteClick(uid, repositoryId) {
    const { deleteRepository, history } = this.props

    deleteRepository(uid, repositoryId).then(() => {
      history.push('/')
    })
  }

  /**
   * Event handler for editable text lose focus
   * The payload includes `name` and `note` for the specific repository
   *
   * @param {String} uid
   * @param {String} repositoryId
   * @param {Object} payload
   * @memberof RepositoryMeta
   * @private
   */
  handleProjectMetaTextBlur(uid, repositoryId, payload) {
    const { updateRepository } = this.props

    updateRepository(uid, repositoryId, payload)
  }

  /**
   * Update the component internal state when editable text changes
   *
   * @param {String} key
   * @param {String} newValue
   * @memberof RepositoryMeta
   * @private
   */
  handleEditableValueChange(key, newValue) {
    switch (key) {
      case EDITABLE_KEY.NAME:
        this.setState({ name: newValue })
        break
      case EDITABLE_KEY.NOTE:
        this.setState({ note: newValue })
        break
      default:
        return
    }
  }

  render() {
    const { uid, repositoryId } = this.props
    const { metaSelectorVisibility, name, note } = this.state

    return (
      <Styled.RepositoryLayout>
        <Styled.Title>
          <EditableText
            placeholder={'New Repository'}
            value={name}
            ref={e => (this._noteInput = e)}
            onChange={newVal => {
              this.handleEditableValueChange(EDITABLE_KEY.NAME, newVal)
            }}
            onConfirm={newVal => {
              const meta = { name: newVal }
              this.handleProjectMetaTextBlur(uid, repositoryId, meta)
            }}
          />
        </Styled.Title>

        <Styled.ButtonWrapper>
          <Styled.StyledButton
            className={REPOSITORY_META_ACTION_BUTTON_CLASS}
            isActive={metaSelectorVisibility}
            noBorder={true}
            onClick={() => {
              this.toggleMetaSelectorVisibility()
            }}
          >
            ●●●
          </Styled.StyledButton>

          {metaSelectorVisibility && (
            <Styled.StyledPopupMeta
              outsideClickIgnoreClass={REPOSITORY_META_ACTION_BUTTON_CLASS}
              handleProjectDeleteClick={() => {
                this.handleProjectDeleteClick(uid, repositoryId)
              }}
              updateMetaSelectorVisibility={state => {
                this.updateMetaSelectorVisibility(state)
              }}
            />
          )}
        </Styled.ButtonWrapper>

        <Styled.Description>
          <EditableText
            multiline={true}
            placeholder={'Note'}
            value={note}
            onChange={newVal => {
              this.handleEditableValueChange(EDITABLE_KEY.NOTE, newVal)
            }}
            onConfirm={newVal => {
              const meta = { note: newVal }
              this.handleProjectMetaTextBlur(uid, repositoryId, meta)
            }}
          />
        </Styled.Description>
      </Styled.RepositoryLayout>
    )
  }
}

export default withRouter(RepositoryMeta)
