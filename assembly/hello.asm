BITS 64                     ; Hello.asm

section .data               ; beginning of our data section

msg db "Hello, World",0xa   ; string with a carriage-return
len equ  $ - msg            ; string length in bytes

section .text               ; start of the code indicator
global start                ; make the main function externally visible

start:                      ; entry point for linker

                            ; write our string to standard output
mov rax, 0x2000004          ; system call number (sys_write)
mov rdi, 1
lea rsi, [msg wrt rip]
mov rdx, len
syscall; call the kernel

xor rdi, rdi
mov rax, 0x2000001          ; system call number (sys_exit)
syscall                     ; make the system call
