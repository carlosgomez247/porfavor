const labelsClasses = ['pink-500','red-500','purple-600','deep-purple-600','indigo-600','blue-600','cyan-600','teal-600','green-600','lime-600',
'yellow-600','orange-600','brown-500','grey-500','blue-grey-600']
module.exports = {
  
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    purge: {
      options: {
        safelist: [
          ...labelsClasses.map((lbl) => `bg-${lbl}`),
          ...labelsClasses.map((lbl) => `accent-${lbl}`)

        ]
       
      },
      // 
    
    }

  }