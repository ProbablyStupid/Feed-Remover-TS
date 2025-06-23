const debug_flag = true;

/**
 * 
 * @param input 
 */
export function debug(...input: any) {
    if (debug_flag)
        console.log(input);
}