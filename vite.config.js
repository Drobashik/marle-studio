import path from 'path'

export default {
    root: path.resolve(__dirname, 'src'),
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, 'src/index.html'),
            },
            output: {
                chunkFileNames: 'src/js/[name]-[hash].js',
                entryFileNames: 'src/js/[name]-[hash].js',

                assetFileNames: ({ name }) => {
                    if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
                        return 'src/images/[name]-[hash][extname]';
                    }

                    if (/\.css$/.test(name ?? '')) {
                        return 'src/css/[name]-[hash][extname]';
                    }

                    // default value
                    // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                    return 'src/[name]-[hash][extname]';
                },
            }
        }
    }
}