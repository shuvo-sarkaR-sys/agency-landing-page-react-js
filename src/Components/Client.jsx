import React from 'react'
import c1 from '../assets/c1.jpg'
const Client = () => {
  return (
    <div className='mt-20 mx-auto'>
      <h1 className='text-4xl text-center font-semibold mb-10'>What clients said:</h1>
      <div className='flex h-[70vh] gap-10 rounded-2xl p-10 bg-[#f6efe9] md:mx:[100px] xl:mx-[200px]'>
        <img className='w-1/2 rounded-2xl' src={c1} alt="" />
        <div className='w-1/2'>
          <span className='text-6xl font-bold text-green-600'>"</span>
          <p className='text-lg font-semibold'>“Most of our time used to be taken up by administrative work whereas now we can focus on building out programs to help our employees. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas nisi consectetur adipisci eaque. Porro, atque.”</p>
          <h1 className='text-2xl text-center mt-14 font-bold'>Mark Zellers</h1>
          <p className='text-gray-600 text-center'>Director of Human Resources.</p>
        </div>
      </div>
      <div>
        <h1 className='text-xl mt-14 mb-10 text-center font-semibold'>Trusted by well-known brands.</h1>
      <div className='flex gap-10 mx-10 md:mx--[120px] xl:mx-[220px]  '>
        <svg width="165" height="48" viewBox="0 0 165 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.835 33.165C5.53 31.813 0 25.41 0 17.715 0 9.034 7.036 2 15.714 2c7.696 0 14.099 5.531 15.451 12.835a15.801 15.801 0 00-2.88-.264c-8.678 0-15.714 7.036-15.714 15.715 0 .983.09 1.946.264 2.88z" fill="#12715B"/><path opacity=".6" fill-rule="evenodd" clip-rule="evenodd" d="M15.714 33.428c8.68 0 15.715-7.035 15.715-15.714 0-.983-.09-1.946-.264-2.88C38.47 16.188 44 22.59 44 30.287 44 38.964 36.965 46 28.286 46c-7.695 0-14.099-5.531-15.451-12.835a15.79 15.79 0 002.88.264z" fill="#12715B"/><path d="M67.55 34.24c5.37 0 9.24-3.03 9.63-7.53h-4.5c-.36 2.16-2.43 3.63-5.13 3.63-3.39 0-6-2.34-6-6.84s2.61-6.87 6-6.87c2.64 0 4.71 1.47 5.01 3.66h4.71c-.57-4.53-4.44-7.53-9.72-7.53-5.61 0-10.53 3.66-10.53 10.74s4.83 10.74 10.53 10.74zm17.981-15.6c-4.14 0-6.6 2.43-6.78 5.46h3.72c.06-1.26.99-2.4 2.82-2.4 1.71 0 2.7.87 2.7 2.13 0 .63-.39 1.11-1.14 1.11h-2.55c-3.3 0-5.52 1.8-5.52 4.77 0 2.58 2.01 4.53 4.95 4.53 2.07 0 3.75-.93 4.26-2.34V34h4.14v-9.72c0-3.42-2.79-5.64-6.6-5.64zm-.75 12.57c-1.17 0-2.01-.69-2.01-1.68 0-1.17.9-1.95 2.16-1.95h3.06v.21c0 1.92-1.17 3.42-3.21 3.42zm10.153 8.91h4.17v-7.47c.81 1.02 2.28 1.59 3.99 1.59 4.35 0 7.29-3.09 7.29-7.8s-2.7-7.8-6.93-7.8c-1.95 0-3.45.72-4.35 1.89v-1.65h-4.17v21.24zm7.65-9.48c-2.25 0-3.72-1.68-3.72-4.2 0-2.55 1.47-4.23 3.72-4.23 2.19 0 3.69 1.68 3.69 4.23 0 2.52-1.5 4.2-3.69 4.2zm15.142 3.6c3.54 0 5.88-1.89 5.88-4.77 0-6.84-8.28-3.33-8.28-6.42 0-.96.81-1.47 1.98-1.47 1.14 0 2.31.69 2.49 1.98h3.63c-.15-2.97-2.61-4.92-6.24-4.92-3.09 0-5.4 1.89-5.4 4.56 0 6.36 8.13 3.33 8.13 6.42 0 .84-.9 1.47-2.19 1.47-1.56 0-2.61-.84-2.76-2.19h-3.6c.15 3.27 2.67 5.34 6.36 5.34zm22.35-15.36h-4.2v8.28c0 1.92-1.29 3.36-3.12 3.36-1.71 0-2.91-1.32-2.91-3.15v-8.49h-4.17v9.42c0 3.45 2.22 5.94 5.61 5.94 2.07 0 3.75-.9 4.59-2.34V34h4.2V18.88zM143.077 34h4.17V12.31h-4.17V34zm17.275-5.13c-.33 1.29-1.44 1.95-3.12 1.95-2.1 0-3.45-1.32-3.75-3.45h10.86c.03-.33.06-.78.06-1.35 0-3.45-2.13-7.38-7.47-7.38-5.13 0-7.47 3.93-7.47 7.77 0 3.81 2.64 7.83 7.77 7.83 3.72 0 6.6-2.1 7.2-5.37h-4.08zm-3.42-7.17c2.01 0 3.18 1.35 3.3 3.03h-6.69c.36-2.1 1.5-3.03 3.39-3.03z" fill="#101828"/></svg>
        <svg width="146" height="48" viewBox="0 0 146 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".4" d="M13.277 22.318c.823-3.068 3.977-6.222 7.045-7.044l19.129-5.127c3.068-.822 4.889.999 4.067 4.067l-5.127 19.13c-.822 3.067-3.976 6.221-7.044 7.044l-19.13 5.126c-3.067.822-4.888-.999-4.066-4.067l5.127-19.129z" fill="#12715B"/><path d="M5.609 14.65c.822-3.069 3.976-6.223 7.044-7.045l19.13-5.126c3.067-.823 4.888.998 4.066 4.066l-5.126 19.13c-.823 3.067-3.976 6.221-7.045 7.044L4.55 37.845c-3.068.822-4.889-.998-4.067-4.067L5.61 14.65z" fill="#12715B"/><path d="M61.524 30.213h6.272v3.696h-11.06V14.253h4.788v15.96zm7.044-4.143c0-1.606.299-3.015.896-4.229.616-1.213 1.447-2.146 2.492-2.8 1.045-.653 2.212-.98 3.5-.98 1.101 0 2.063.224 2.884.672.84.448 1.484 1.036 1.932 1.764v-2.212h4.788V33.91h-4.788v-2.212c-.467.728-1.12 1.316-1.96 1.764-.822.448-1.783.672-2.884.672a6.42 6.42 0 01-3.472-.98c-1.046-.672-1.876-1.614-2.492-2.828-.597-1.232-.896-2.65-.896-4.256zm11.704.027c0-1.195-.336-2.137-1.008-2.828a3.185 3.185 0 00-2.408-1.036c-.952 0-1.764.345-2.436 1.036-.654.672-.98 1.606-.98 2.8 0 1.195.326 2.147.98 2.856.672.69 1.484 1.036 2.436 1.036s1.755-.345 2.408-1.036c.672-.69 1.008-1.633 1.008-2.828zm23.652-7.812l-9.8 23.044h-5.152l3.584-7.952L86.2 18.285h5.348l3.612 9.772 3.584-9.772h5.18zm15.899 7.56c0 .448-.028.915-.084 1.4h-10.836c.075.97.383 1.717.924 2.24.56.504 1.241.756 2.044.756 1.195 0 2.025-.504 2.492-1.512h5.096a6.895 6.895 0 01-1.428 2.772c-.672.821-1.521 1.466-2.548 1.932-1.027.467-2.175.7-3.444.7-1.531 0-2.893-.327-4.088-.98a6.97 6.97 0 01-2.8-2.8c-.672-1.213-1.008-2.632-1.008-4.256s.327-3.043.98-4.256a6.968 6.968 0 012.8-2.8c1.195-.653 2.567-.98 4.116-.98 1.512 0 2.856.317 4.032.952a6.742 6.742 0 012.744 2.716c.672 1.176 1.008 2.548 1.008 4.116zm-4.9-1.26c0-.821-.28-1.475-.84-1.96-.56-.485-1.26-.728-2.1-.728-.803 0-1.484.234-2.044.7-.541.467-.877 1.13-1.008 1.988h5.992zm11.654-3.695a6.183 6.183 0 012.1-2.017c.84-.504 1.773-.756 2.8-.756v5.068h-1.316c-1.195 0-2.091.262-2.688.784-.597.504-.896 1.4-.896 2.688v7.252h-4.788V18.285h4.788v2.604zm12.985 13.243c-1.363 0-2.576-.233-3.64-.7-1.064-.466-1.904-1.101-2.52-1.904a5.112 5.112 0 01-1.036-2.744h4.732c.056.541.308.98.756 1.316.448.336.998.504 1.652.504.597 0 1.054-.112 1.372-.336.336-.242.504-.55.504-.924 0-.448-.234-.774-.7-.98-.467-.224-1.223-.466-2.268-.728-1.12-.261-2.054-.532-2.8-.812a5.023 5.023 0 01-1.932-1.372c-.542-.634-.812-1.484-.812-2.548 0-.896.242-1.708.728-2.436.504-.747 1.232-1.335 2.184-1.764.97-.43 2.118-.644 3.444-.644 1.96 0 3.5.486 4.62 1.456 1.138.97 1.792 2.259 1.96 3.864h-4.424c-.075-.541-.318-.97-.728-1.288-.392-.317-.915-.476-1.568-.476-.56 0-.99.112-1.288.336a.992.992 0 00-.448.868c0 .448.233.784.7 1.008.485.224 1.232.448 2.24.672 1.157.299 2.1.598 2.828.896.728.28 1.362.747 1.904 1.4.56.635.849 1.494.868 2.576 0 .915-.262 1.736-.784 2.464-.504.71-1.242 1.27-2.212 1.68-.952.41-2.063.616-3.332.616z" fill="#101828"/></svg>
        <svg width="178" height="48" viewBox="0 0 178 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 38c7.732 0 14-6.268 14-14s-6.268-14-14-14S6 16.268 6 24s6.268 14 14 14zm0 6c11.046 0 20-8.954 20-20S31.046 4 20 4 0 12.954 0 24s8.954 20 20 20z" fill="#12715B"/><path d="M66.184 20.413a5.997 5.997 0 01-.756 2.94c-.485.915-1.26 1.652-2.324 2.212-1.045.56-2.37.84-3.976.84h-3.276v7.504h-3.92V14.365h7.196c1.512 0 2.8.261 3.864.784s1.857 1.242 2.38 2.156c.541.915.812 1.95.812 3.108zm-7.224 2.828c1.083 0 1.885-.242 2.408-.728.523-.504.784-1.204.784-2.1 0-1.904-1.064-2.856-3.192-2.856h-3.108v5.684h3.108zm15.775 10.92c-1.493 0-2.837-.327-4.032-.98a7.351 7.351 0 01-2.828-2.828c-.672-1.213-1.008-2.613-1.008-4.2 0-1.586.346-2.986 1.036-4.2a7.294 7.294 0 012.884-2.8c1.213-.672 2.567-1.008 4.06-1.008 1.494 0 2.847.336 4.06 1.008a7.107 7.107 0 012.856 2.8c.71 1.213 1.064 2.614 1.064 4.2 0 1.587-.364 2.987-1.092 4.2a7.44 7.44 0 01-2.912 2.828c-1.213.654-2.576.98-4.088.98zm0-3.416c.71 0 1.372-.168 1.988-.504.635-.354 1.139-.877 1.512-1.568.374-.69.56-1.53.56-2.52 0-1.474-.392-2.604-1.176-3.388-.765-.803-1.708-1.204-2.828-1.204-1.12 0-2.063.401-2.828 1.204-.746.784-1.12 1.913-1.12 3.388 0 1.475.364 2.614 1.092 3.416.747.784 1.68 1.176 2.8 1.176zM88.503 13.19v20.72h-3.92V13.19h3.92zm17.593 5.207l-9.604 22.848H92.32l3.36-7.728-6.216-15.12h4.396l4.004 10.836 4.06-10.836h4.172zm20.257-.224c1.904 0 3.434.588 4.592 1.764 1.176 1.157 1.764 2.781 1.764 4.872v9.1h-3.92v-8.568c0-1.213-.308-2.137-.924-2.772-.616-.653-1.456-.98-2.52-.98s-1.914.327-2.548.98c-.616.635-.924 1.559-.924 2.772v8.568h-3.92v-8.568c0-1.213-.308-2.137-.924-2.772-.616-.653-1.456-.98-2.52-.98-1.083 0-1.942.327-2.576.98-.616.635-.924 1.559-.924 2.772v8.568h-3.92V18.397h3.92v1.876a5.244 5.244 0 011.932-1.54 6.162 6.162 0 012.632-.56c1.213 0 2.296.262 3.248.784a5.31 5.31 0 012.212 2.184c.504-.896 1.232-1.614 2.184-2.156a6.334 6.334 0 013.136-.812zm7.948 7.924c0-1.568.308-2.959.924-4.172.634-1.213 1.484-2.146 2.548-2.8 1.082-.653 2.286-.98 3.612-.98 1.157 0 2.165.233 3.024.7.877.467 1.577 1.055 2.1 1.764v-2.212h3.948V33.91h-3.948v-2.268c-.504.728-1.204 1.335-2.1 1.82-.878.467-1.895.7-3.052.7a6.66 6.66 0 01-3.584-1.008c-1.064-.672-1.914-1.614-2.548-2.828-.616-1.232-.924-2.641-.924-4.228zm12.208.056c0-.952-.187-1.764-.56-2.436-.374-.69-.878-1.213-1.512-1.568a3.965 3.965 0 00-2.044-.56c-.728 0-1.4.178-2.016.532-.616.355-1.12.878-1.512 1.568-.374.672-.56 1.475-.56 2.408 0 .933.186 1.755.56 2.464.392.69.896 1.223 1.512 1.596a3.91 3.91 0 002.016.56 4.12 4.12 0 002.044-.532 4.083 4.083 0 001.512-1.568c.373-.69.56-1.512.56-2.464zm11.22-4.536v7.504c0 .523.121.905.364 1.148.261.224.691.336 1.288.336h1.82v3.304h-2.464c-3.304 0-4.956-1.605-4.956-4.816v-7.476h-1.848v-3.22h1.848v-3.836h3.948v3.836h3.472v3.22h-3.472zm13.908-3.444c1.176 0 2.221.262 3.136.784.914.504 1.624 1.26 2.128 2.268.522.99.784 2.184.784 3.584v9.1h-3.92v-8.568c0-1.232-.308-2.175-.924-2.828-.616-.672-1.456-1.008-2.52-1.008-1.083 0-1.942.336-2.576 1.008-.616.653-.924 1.596-.924 2.828v8.568h-3.92V13.19h3.92v7.14c.504-.672 1.176-1.195 2.016-1.568.84-.392 1.773-.588 2.8-.588z" fill="#101828"/></svg>
        <svg width="177" height="48" viewBox="0 0 177 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.58 3.675A22.002 22.002 0 0122 2v11a10.998 10.998 0 00-11 11H0A22.002 22.002 0 0113.58 3.675z" fill="#12715B"/><path opacity=".6" d="M0 24a22.002 22.002 0 0022 22 22.003 22.003 0 0022-22H33a10.998 10.998 0 01-11 11 10.998 10.998 0 01-11-11H0zm22-7a7 7 0 00-7 7h14a7 7 0 00-7-7z" fill="#12715B"/><path d="M22 31a7 7 0 01-7-7h14a7 7 0 01-7 7z" fill="#12715B"/><path d="M66.817 19.402c-.08-.802-.421-1.425-1.024-1.87-.604-.443-1.422-.666-2.456-.666-.703 0-1.296.1-1.78.299-.484.192-.855.46-1.114.805a1.938 1.938 0 00-.378 1.174c-.013.364.063.682.229.954.172.272.408.507.706.706a5.36 5.36 0 001.034.507c.391.14.809.259 1.253.358l1.83.438a12.86 12.86 0 012.445.795c.743.331 1.386.74 1.93 1.223a5.084 5.084 0 011.262 1.71c.305.656.461 1.409.468 2.257-.007 1.247-.325 2.327-.955 3.242-.623.908-1.525 1.614-2.704 2.118-1.174.497-2.589.745-4.246.745-1.644 0-3.076-.251-4.296-.755-1.213-.504-2.16-1.25-2.843-2.237-.677-.995-1.031-2.224-1.064-3.69h4.166c.046.683.242 1.253.587 1.71.35.452.818.793 1.402 1.025.59.225 1.256.338 1.998.338.73 0 1.362-.106 1.9-.318.543-.212.964-.507 1.262-.885.298-.378.447-.812.447-1.303 0-.457-.136-.841-.407-1.153-.265-.311-.656-.577-1.173-.795a11.933 11.933 0 00-1.88-.597L61.2 24.98c-1.717-.418-3.073-1.07-4.067-1.959-.994-.888-1.488-2.084-1.481-3.59-.007-1.232.321-2.31.984-3.23.67-.922 1.587-1.641 2.754-2.158 1.167-.517 2.493-.776 3.977-.776 1.512 0 2.831.259 3.958.776 1.133.517 2.015 1.236 2.645 2.157.63.922.954 1.989.974 3.202h-4.126zm14.181 14.805c-1.57 0-2.923-.318-4.057-.954a6.538 6.538 0 01-2.605-2.724c-.61-1.18-.915-2.576-.915-4.187 0-1.57.305-2.95.915-4.136.61-1.186 1.469-2.111 2.576-2.774 1.113-.663 2.42-.994 3.917-.994 1.008 0 1.946.162 2.814.487a6.242 6.242 0 012.287 1.441c.656.643 1.167 1.452 1.531 2.427.365.968.547 2.101.547 3.4v1.164H75.112v-2.625h8.909c0-.61-.133-1.15-.398-1.621a2.849 2.849 0 00-1.104-1.104c-.464-.272-1.004-.408-1.62-.408-.643 0-1.213.15-1.71.448a3.142 3.142 0 00-1.154 1.183 3.341 3.341 0 00-.427 1.64v2.496c0 .756.139 1.41.417 1.96.285.55.686.974 1.203 1.272.517.298 1.13.448 1.84.448.47 0 .901-.067 1.293-.2a2.68 2.68 0 001.004-.596c.278-.265.49-.59.636-.974l3.918.258A5.35 5.35 0 0186.696 32c-.61.696-1.399 1.24-2.367 1.63-.961.385-2.071.577-3.33.577zm16.655 5.748c-1.372 0-2.549-.19-3.53-.567-.974-.371-1.75-.878-2.327-1.521a4.677 4.677 0 01-1.123-2.168l3.918-.527c.119.305.308.59.566.855.259.265.6.477 1.025.636.43.166.954.249 1.57.249.922 0 1.68-.225 2.277-.676.604-.444.905-1.19.905-2.237v-2.794h-.179a4.018 4.018 0 01-.835 1.203c-.371.378-.848.686-1.432.924-.583.24-1.28.358-2.088.358-1.147 0-2.19-.265-3.132-.795-.934-.537-1.68-1.356-2.237-2.456-.55-1.107-.825-2.506-.825-4.196 0-1.73.281-3.175.845-4.335.563-1.16 1.312-2.029 2.247-2.605a5.807 5.807 0 013.092-.866c.855 0 1.571.146 2.148.438.577.285 1.04.643 1.392 1.074.358.424.633.842.825 1.253h.159v-2.566h4.206v15.422c0 1.3-.318 2.387-.954 3.262-.637.875-1.518 1.53-2.645 1.968-1.12.445-2.41.667-3.868.667zm.09-9.446c.682 0 1.259-.17 1.73-.508.477-.344.842-.835 1.093-1.471.259-.643.388-1.412.388-2.307s-.126-1.67-.378-2.327c-.252-.663-.616-1.176-1.093-1.54-.478-.365-1.058-.548-1.74-.548-.697 0-1.283.19-1.76.567-.478.371-.839.888-1.084 1.551-.246.663-.368 1.429-.368 2.297 0 .882.122 1.644.368 2.287.252.636.613 1.13 1.084 1.481.477.345 1.063.518 1.76.518zm10.748 3.401V18.635h4.037v2.695h.179c.318-.895.849-1.6 1.591-2.118.742-.517 1.631-.776 2.665-.776 1.047 0 1.939.262 2.674.786a3.697 3.697 0 011.472 2.108h.159c.312-.875.875-1.574 1.69-2.098.822-.53 1.794-.796 2.914-.796 1.425 0 2.582.455 3.47 1.363.895.901 1.342 2.18 1.342 3.838v10.271h-4.226v-9.436c0-.848-.225-1.485-.676-1.909-.45-.424-1.014-.636-1.69-.636-.769 0-1.369.245-1.8.735-.431.484-.646 1.124-.646 1.92v9.326h-4.107v-9.525c0-.75-.215-1.346-.646-1.79-.424-.444-.984-.666-1.68-.666-.471 0-.895.119-1.273.358-.371.232-.666.56-.885.984-.219.418-.328.908-.328 1.471v9.168h-4.236zm32.499.297c-1.571 0-2.923-.318-4.056-.954a6.54 6.54 0 01-2.606-2.724c-.609-1.18-.914-2.576-.914-4.187 0-1.57.305-2.95.914-4.136.61-1.186 1.469-2.111 2.576-2.774 1.113-.663 2.419-.994 3.917-.994 1.008 0 1.946.162 2.814.487a6.236 6.236 0 012.287 1.441c.656.643 1.167 1.452 1.531 2.427.365.968.547 2.101.547 3.4v1.164h-12.896v-2.625h8.909c0-.61-.132-1.15-.398-1.621a2.851 2.851 0 00-1.103-1.104c-.464-.272-1.005-.408-1.621-.408-.643 0-1.213.15-1.71.448a3.14 3.14 0 00-1.154 1.183 3.339 3.339 0 00-.427 1.64v2.496c0 .756.139 1.41.417 1.96.285.55.686.974 1.204 1.272.517.298 1.13.448 1.839.448.471 0 .902-.067 1.293-.2a2.685 2.685 0 001.004-.596 2.6 2.6 0 00.636-.974l3.918.258A5.355 5.355 0 01146.688 32c-.61.696-1.399 1.24-2.367 1.63-.961.385-2.071.577-3.331.577zM155 25.08v8.83h-4.235V18.635h4.036v2.695h.179a4.264 4.264 0 011.701-2.108c.795-.524 1.76-.785 2.893-.785 1.061 0 1.986.232 2.774.696.789.464 1.402 1.127 1.84 1.988.437.855.656 1.876.656 3.063v9.724h-4.236V24.94c.007-.934-.232-1.663-.716-2.187-.483-.53-1.15-.796-1.998-.796-.57 0-1.074.123-1.512.368-.43.246-.768.604-1.014 1.074-.238.464-.361 1.024-.368 1.68zm21.306-6.444v3.182h-9.197v-3.182h9.197zm-7.109-3.659h4.236v14.239c0 .391.059.696.179.915a.986.986 0 00.497.447c.218.086.47.13.755.13.199 0 .398-.017.597-.05l.457-.09.667 3.152a12.13 12.13 0 01-.895.229 7.1 7.1 0 01-1.402.169c-1.021.04-1.916-.096-2.685-.408-.762-.311-1.356-.795-1.78-1.451-.424-.657-.633-1.485-.626-2.486V14.977z" fill="#101828"/></svg>
        <svg width="179" height="48" viewBox="0 0 179 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.8 35.787c-3.5-1.3-7.1-1.5-10.4-.6-2.3.6-4.5 1.8-6.5 3.3l-1.4 1.2-.4.4.9.8c.1 0 .1.1.2.2.2.2.4.3.7.5l.6.4.6-.5c.1-.1.3-.3.5-.4 1.8-1.5 3.8-2.5 5.9-3 2.7-.7 5.6-.6 8.5.5 2.4.9 7.3 2 13.2-.5l.2-.1.3-.3c0-.1.1-.1.2-.2.5-.6 1-1.2 1.4-1.9l2-3.1-3.2 1.8c-4.7 2.6-9 3.1-13.3 1.5zM12.1 24.988c2.7-.7 5.6-.6 8.5.5 3.2 1.2 11.4 2.9 20.6-5.4l1.5-1.5.1-.1.4-.4-.2-.5c-.1-.4-.3-.9-.5-1.4l-.5-1.4-1 1c-.1.2-.3.3-.5.5-4.4 4.5-11.2 9.1-19 6.3-3.5-1.3-7.1-1.5-10.4-.6-3.2.9-6 2.6-8.6 5v-.1l-1.5 1.6c0 .1-.1.1-.2.2l-.3.3.1.4c.1.5.3 1 .4 1.5l.6 1.6 1-1.3c.1-.2.3-.3.4-.5 2.1-1.9 5-4.6 9.1-5.7z" fill="#12715B"/><path d="M2.4 23.187c2.3-2.4 4.9-3.9 7.7-4.7 2.7-.7 5.6-.6 8.5.5 9 3.3 16.8-2.1 20.2-5l1.3-1.3.5-.4-.4-.6c-.3-.3-.5-.7-.8-1.1l-.6-.8-.7.7-.4.4c-4.2 4-10.7 8.1-18.1 5.3-3.5-1.3-7.1-1.5-10.4-.6-2.1.6-4.1 1.6-6.1 2.9l-2.1 1.7-.5.5-.2.2v.3c-.1.7-.1 1.4-.2 2l-.1 2.5 1.7-1.8c.2-.2.4-.5.7-.7zm26.3 19.4l-.2.6.2-.6c-.3-.1-.5-.2-.8-.3-3.5-1.3-7.1-1.5-10.4-.6-.7.2-1.4.4-2.1.7l-2.4 1.1-.6.3 2 .7 1.8.6.3.1.3-.1c.3-.1.6-.3.9-.3.2 0 .4-.1.6-.2 2.4-.6 5-.6 7.8.3.3.1.5.2.8.3l.5.2.3-.1c.7-.2 1.5-.4 2.1-.7l2.8-1-2.9-.7c-.3-.1-.7-.2-1-.3zm15.3-20.7l-1.5 1.5-.6.6c-4.1 3.9-10.7 8.1-18.1 5.3-3.5-1.3-7.1-1.5-10.4-.6-3.1.9-5.9 2.5-8.4 4.9l-1.3 1.4-.4.5.4.6c.3.4.5.7.7 1.1l.6.9.7-.9.4-.4c2.4-2.6 5-4.2 8-5 2.7-.7 5.6-.6 8.5.5 2.5.9 5.1 1.2 7.7.9 4.6-.5 9.2-3.1 12.6-6 .2-.2.4-.3.6-.5l.3-.3v-.3c0-.6.1-1.3.1-1.9l.1-2.3z" fill="#12715B"/><path d="M6 12.688l-.3-.6.3.6c.6-.3 1.3-.5 1.9-.7 2.7-.7 5.6-.6 8.5.5 1.9.7 3.8 1 5.9 1 4.2 0 8.4-1.5 12.3-4.4l1.5-1.2.5-.4-.9-.7c-.3-.3-.7-.6-1.1-.8l-.6-.4-.5.4c-.2.1-.3.3-.5.4-5.3 4-10.6 5.1-15.6 3.2-3.6-1.3-7.2-1.6-10.8-.5-.3.1-.6.2-1 .3l-.2.1-.3.3c0 .1-.1.1-.2.2-.4.6-.9 1.1-1.3 1.7l-1.9 2.9 3.1-1.6c.5 0 .9-.2 1.2-.3zm8.2-6.801l.3.1c1.3.5 3.3 1 5.8 1 2.6 0 5.1-.6 7.6-1.6l3.1-1.5-2.1-.7c-.6-.2-1.2-.4-1.9-.5h-.3l-.3.1c-.3.1-.6.3-.9.4-3 1.1-6 1.3-8.9.5l-.9-.3-.3-.1-.3.1c-.6.2-1.2.4-1.8.7l-2.3 1 2.4.7c.2-.1.5 0 .8.1z" fill="#12715B"/><path d="M61.28 33.91h-4.614l7.03-20.365h5.548l7.02 20.364H71.65l-5.1-15.71h-.16l-5.11 15.71zm-.289-8.005H71.89v3.36H60.991v-3.36zm21.88-12.36V33.91h-4.235V13.545h4.235zm11.517 5.091v3.182h-9.197v-3.182h9.197zm-7.11-3.659h4.236v14.239c0 .391.06.696.18.915.119.212.284.36.497.447.218.086.47.13.755.13.2 0 .398-.017.597-.05l.457-.09.666 3.152c-.212.066-.51.143-.894.229a7.176 7.176 0 01-1.402.169c-1.021.04-1.916-.096-2.685-.408-.762-.311-1.356-.795-1.78-1.452-.424-.656-.633-1.484-.626-2.485V14.977zm15.45 17.828v-14.08h3.56v14.08h-3.56zm-5.26-5.26v-3.56h14.08v3.56h-14.08zm29.372-8.143c-.079-.802-.421-1.425-1.024-1.87-.603-.444-1.422-.666-2.456-.666-.703 0-1.296.1-1.78.299-.484.192-.855.46-1.113.805a1.938 1.938 0 00-.378 1.173c-.014.365.063.683.228.955.173.272.408.507.706.706a5.41 5.41 0 001.034.507c.392.14.809.259 1.253.358l1.83.438c.888.198 1.703.463 2.446.795.742.331 1.385.74 1.929 1.223a5.101 5.101 0 011.263 1.71c.305.656.46 1.409.467 2.257-.007 1.247-.325 2.327-.955 3.242-.623.908-1.524 1.614-2.704 2.118-1.173.497-2.589.745-4.246.745-1.644 0-3.076-.252-4.295-.755-1.213-.504-2.161-1.25-2.844-2.238-.676-.994-1.031-2.223-1.064-3.688h4.166c.047.682.242 1.252.587 1.71.351.45.819.792 1.402 1.024.59.225 1.256.338 1.998.338.73 0 1.363-.106 1.9-.318.543-.212.964-.507 1.262-.885a2.04 2.04 0 00.448-1.303c0-.457-.136-.841-.408-1.153-.265-.312-.656-.577-1.173-.795a11.97 11.97 0 00-1.879-.597l-2.218-.557c-1.717-.418-3.072-1.07-4.067-1.959-.994-.888-1.488-2.085-1.481-3.59-.007-1.232.321-2.31.984-3.23.67-.922 1.588-1.641 2.755-2.158 1.166-.518 2.492-.776 3.977-.776 1.511 0 2.83.258 3.957.776 1.134.517 2.015 1.236 2.645 2.157.63.922.955 1.989.975 3.202h-4.127zm11.457 5.678v8.83h-4.236V13.544h4.117v7.786h.179c.345-.902.901-1.607 1.67-2.118.769-.517 1.734-.776 2.894-.776 1.06 0 1.985.232 2.774.697.795.457 1.412 1.116 1.849 1.978.444.855.663 1.88.657 3.073v9.724h-4.236V24.94c.006-.941-.232-1.673-.716-2.197-.477-.524-1.147-.786-2.009-.786-.576 0-1.087.123-1.531.368a2.611 2.611 0 00-1.034 1.074c-.245.464-.371 1.024-.378 1.68zm13.237 8.83V18.635h4.236V33.91h-4.236zm2.128-17.242c-.63 0-1.17-.21-1.621-.627-.444-.424-.666-.931-.666-1.521 0-.583.222-1.084.666-1.502a2.282 2.282 0 011.621-.636c.63 0 1.167.212 1.611.636.45.418.676.918.676 1.502 0 .59-.226 1.097-.676 1.521a2.266 2.266 0 01-1.611.627zm15.228 1.968v3.182h-10.94v-3.182h10.94zm-8.782 15.273V17.533c0-1.107.215-2.025.646-2.755a4.148 4.148 0 011.79-1.64c.755-.365 1.614-.547 2.575-.547.65 0 1.243.05 1.78.149.543.1.948.189 1.213.268l-.756 3.182a5.318 5.318 0 00-.616-.149 3.85 3.85 0 00-.736-.07c-.623 0-1.057.146-1.303.438-.245.285-.368.686-.368 1.203V33.91h-4.225zm17.979-15.273v3.182h-9.197v-3.182h9.197zm-7.109-3.659h4.236v14.239c0 .391.059.696.179.915a.986.986 0 00.497.447c.219.086.471.13.756.13.198 0 .397-.017.596-.05.199-.04.351-.07.458-.09l.666 3.152c-.212.066-.511.143-.895.229a7.176 7.176 0 01-1.402.169c-1.021.04-1.916-.096-2.685-.408-.762-.311-1.355-.795-1.78-1.452-.424-.656-.633-1.484-.626-2.485V14.977z" fill="#101828"/></svg>
      </div></div>
    </div>
  )
}

export default Client