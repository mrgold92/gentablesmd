import {toast} from 'https://cdn.skypack.dev/wc-toast'

const $ = (selector) => document.querySelector(selector)
const $cols = $('#cols')
const $rows = $('#rows')
const $btn = $('#btn')
const $textarea = $('#textarea')


$btn.addEventListener('click', () => {
        const cols = parseInt($cols.value) + 1
        const rows = parseInt($rows.value) + 1

        console.log(typeof cols, rows)

        if (cols - 1 === 0 || rows - 1 === 0 || isNaN(cols) || isNaN(rows)) {
            toast('¡No puedes generar tablas con 0 columnas o filas!', {
                icon: {
                    type: 'error'
                }
            })
            return;
        }

        let template = ""
        let mitad = Math.floor(rows / 2)
        for (let i = 0; i < rows; i++) {

            for (let j = 0; j < cols; j++) {

                if (i !== 1) {
                    if (j < cols - 1) {
                        template += `|         `
                    } else {
                        template += `|`
                    }

                } else {
                    if (j < cols - 1) {
                        template += `| ---- `
                    } else {
                        template += `|`
                    }
                }
            }

            template += '\r\n'

        }

        navigator.clipboard.writeText(template)
            .then(() => {
                toast('¡Copiado al portapeles!', {
                    icon: {
                        type: 'success'
                    }
                })
            })

        $textarea.value = template


    }
)

