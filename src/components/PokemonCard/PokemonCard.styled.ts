import styled from 'styled-components'

export const PokemonCardStyled = styled.div`
    min-height: 300px;
    width: 260px;
    box-shadow: #cbd5e1 2px 4px 4px 2px;
    border-radius: 8px;
    padding: 12px;
`

export const PokemonCardContainerStyled = styled.div`
    width: 100%;
    height: 100%;
    
`
export const PokemonCardImageStyled = styled.div`
    border-radius: 12px 12px 2px 2px;
    box-shadow: #cbd5e1 2px 4px 4px 2px;
    align-items: center;
    display: flex;
    justify-content: center;
`

export const PokemonCardStatsStyled = styled.div`
    margin: 20px 0 0;
`

export const PokemonCardStatsTitleStyled = styled.div`
    display: flex;
    gap: 12px;
    
`

export const PokemonCardTypesStyled = styled.div`
    display: flex;
    gap: 4px;
    border-bottom: 1px solid var(--color-secondary-light);
    padding-bottom: 12px;
    margin-bottom: 12px;
`

export const PokemonCardBodyStatsStyled = styled.div`
    span {
        font-weight: 500;
    }
`

export const PokemonCardDetailButton = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: var(--color-secondary-light);
    margin-top: 20px;
`

export const PokemonCardAbilitiesStyled = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid var(--color-secondary-light);
    
    p{
        font-weight: 500;
    }
`