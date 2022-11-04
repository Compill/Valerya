import { extendTheme, useToggleDarkMode } from "@soperio/react";
import { Button, Checkbox, Slider } from "@valerya/components";
import React from "react";
import { SketchPicker } from "react-color";
import { useRecoilState, useRecoilValue } from "recoil";
import { CodeBlock } from "./codeblock/CodeBlock";
import { activeState, coefState, colorState, disabledState, selectedState } from "./states";

export function LeftPanel()
{
    return (
        <div
            h="100%"
            bgColor="--bg-4"
            py="5"
            px="10"
            dflex
            flexCol
            alignItems="center"
            gap="5"
            maxW="1/4"
            overflowY="auto">
            <ColorPicker />

            <Coef />

            <ToggleDarkModeButton />

            <States />

            <CodeSample />
        </div>
    )
}

function Coef()
{
    const [coef, setCoef] = useRecoilState(coefState)

    return (
        <div w="full" textColor="--text-1">
            <div w="full" dflex flexRow alignItems="center">
                <span>Adjust colors</span>
                <span flexGrow />
                <span me="2" font="mono">{addZeroes(coef, 3)}</span>
                <Button variant="borderless" p="0" pt="0" dflex alignItems="center" onClick={() => setCoef(0)}>
                    <svg w="5" h="5" viewBox="0 0 24 24" display="inline">
                        <path fill="currentColor" d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" />
                    </svg>
                </Button>
            </div>

            <Slider h="auto" w="full" min={-0.5} max={0.5} step={0.001} onChange={(coef) => setCoef(coef)} />
        </div>
    )
}

function addZeroes(num, zeroes)
{
    const dec = String(num).split('.')[1]
    const len = dec && dec.length > zeroes ? dec.length : zeroes
    return (num >= 0 ? "+" : "") + Number(num).toFixed(len)
}

function ColorPicker()
{
    const [color, setColor] = useRecoilState(colorState)

    return (
        <SketchPicker color={color} onChange={(color) => setColor(color.hex)} />
    )
}

function ToggleDarkModeButton()
{
    const toggleDarkMode = useToggleDarkMode()

    return (
        <Button onClick={toggleDarkMode} w="full">Toggle darkMode</Button>
    )
}

function States()
{
    const [selected, setSelected] = useRecoilState(selectedState)
    const [active, setActive] = useRecoilState(activeState)
    const [disabled, setDisabled] = useRecoilState(disabledState)

    return (
        <div dflex flexCol alignItems="start" gap="3" w="full" textColor="--text-1">
            <Checkbox defaultChecked={selected} onClick={() => setSelected((selected) => !selected)} label="selected" />
            <Checkbox defaultChecked={active} onClick={() => setActive((active) => !active)} label="active" />
            <Checkbox defaultChecked={disabled} onClick={() => setDisabled((disabled) => !disabled)} label="disabled" />
        </div>
    )
}

function CodeSample()
{
    const color = useRecoilValue(colorState)
    const coef = useRecoilValue(coefState)

    const code = `
import { extendTheme } from "@soperio/react"
import { buildSurface, withSurface } from "@valerya/ui"

const theme = extendTheme(
    ..., // your theme
    withSurface(buildSurface("${color.toUpperCase()}"${coef ? `{ coef: ${coef} }` : ""})),
    withDarkSurface(buildSurface("${color.toUpperCase()}", { darkMode: true ${coef ? `, coef: ${coef} ` : ""}})),
)
            `

    return (
        <CodeBlock w="100%">
            {code}
        </CodeBlock>
    )
}