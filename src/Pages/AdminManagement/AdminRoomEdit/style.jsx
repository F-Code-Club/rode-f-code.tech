import styled from 'styled-components';

export const RoomEditStyle = styled.div`
    .box-style {
        background: ${(props) => props.theme.colors.light};
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
        border-radius: 1.6em;
    }
    .rounded-l-0 {
        border-radius: 0.35em 0 0 0.35em;
    }

    .rounded-r-0 {
        border-radius: 0 0.35em 0.35em 0;
    }
    .btn-green,
    .btn-green:hover {
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.light};
        border-color: ${(props) => props.theme.colors.primary};
    }
    .btn-green:hover {
        transform: scale(1.03);
        opacity: 0.8;
    }
    .mw-fit {
        min-width: 3.5em;
    }
    .bg-light {
        background-color: ${(props) => props.theme.colors.light};
    }
    .border-green {
        border-color: ${(props) => props.theme.colors.primary};
    }
    .color-primary {
        color: ${(props) => props.theme.colors.primary};
    }
    .btn-light {
        color: ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.light};
        border-color: ${(props) => props.theme.colors.primary};
    }
    .btn-light:hover {
        opacity: 0.8;
        background-color: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.light};
        border: 0.5px solid;
    }
    .border-dashed {
        border: 0.5px dashed;
    }
    .btn-grey,
    .btn-grey:hover {
        background-color: ${(props) => props.theme.colors.grey2};
        color: ${(props) => props.theme.colors.light};
        border: none;
    }

    .btn-grey:hover {
        opacity: 0.8;
        transform: scale(1.025);
    }
    .width {
        width: 100px;
    }
    label[for='input'],
    label[for='output'] {
        position: relative;
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        color: ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.light};
        margin-left: 10px;
        padding: 5px;
        z-index: 1;
    }

    textarea {
        position: relative;
        top: -12px;
        display: block;
        border: 1px solid ${(props) => props.theme.colors.primary};
        border-radius: 5px;
        padding: 10px;
        &:focus-visible {
            outline-color: ${(props) => props.theme.colors.primary};
        }
    }
    .preview-image {
        width: 300px;
        height: 250px;
        object-fit: cover;
        margin-bottom: 20px;
    }
`;